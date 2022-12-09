'use client'

import 'styles/globals.scss'
import { SessionProvider } from 'next-auth/react'
import { NextUIProvider } from '@nextui-org/react'
import Layout from '@/components/layout'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <SessionProvider>
          <NextUIProvider>
            <Layout>
              {children}
            </Layout>
          </NextUIProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
