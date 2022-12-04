import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from 'libs/prisma'
import { get } from 'utils/env'

function isValidHttpUrl (url) {
  const isDevelopmentMode = get('NODE_ENV') !== 'production'

  if (isDevelopmentMode) {
    return true
  }

  try {
    return (/^https?:/.test(url).protocol)
  } catch {
    return false
  }
}

export default async function handler (req, res) {
  const {
    query: { callbackUrl }
  } = req

  if (
    callbackUrl &&
    !isValidHttpUrl(callbackUrl)
  ) {
    return res.status(500).send('Error internal server')
  }

  return await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        id: 'credentials',
        name: 'Credentials',
        scope: 'email',
        credentials: {
          email: {
            label: 'Email',
            type: 'email',
            required: true
          },
          password: {
            label: 'Password',
            type: 'password',
            required: true
          }
        },
        authorize: async (credentials, _) => {
          const nextAuthUrl = get('NEXTAUTH_URL')

          const response = await fetch(
            `${nextAuthUrl}/api/users/check-credentials`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
              },
              body: JSON.stringify(credentials)
            }
          )

          if (!response.ok) {
            return null
          }

          return await response.json()
        }
      }),

      FacebookProvider({
        clientId: get('FACEBOOK_CLIENT_ID'),
        clientSecret: get('FACEBOOK_CLIENT_SECRET')
      }),

      GoogleProvider({
        clientId: get('GOOGLE_CLIENT_ID'),
        clientSecret: get('GOOGLE_CLIENT_SECRET')
      })
    ],
    // pages: {
    //   signIn: '/auth/signin'
    // },
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' },
    secret: get('SECRET')
  })
}
