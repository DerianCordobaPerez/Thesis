import 'styles/globals.scss'
import { SessionProvider } from 'next-auth/react'
import { NextUIProvider } from '@nextui-org/react'

function MyApp ({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  )
}

export default MyApp
