import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from 'libs/prisma'

export default NextAuth({
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
      authorize: async (credentials, req) => {
        const user = await fetch(
          `${process.env.API_URL}/users/check-credentials`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json'
            },
            body: JSON.stringify(credentials)
          }
        )
          .then((res) => res.json())
          .catch(() => null)

        return user || null
      }
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  // pages: {
  //   signIn: '/auth/signin'
  // },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  secret: process.env.SECRET
})
