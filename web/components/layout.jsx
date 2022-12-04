import Head from 'next/head'
import Box from './box'
import Navbar from './navbar'

export default function Layout ({ children, title }) {
  title ??= 'Home'

  return (
    <Box
      css={{
        maxW: '100%'
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content="Thesis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {children}
    </Box>
  )
}
