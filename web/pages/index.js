import Layout from 'components/layout'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Home () {
  const { data: session } = useSession()

  return (
    <Layout>
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>

      {session &&
        <>
          <h1>
            {JSON.stringify(session)}
          </h1>

          <button onClick={() => signOut()}>Sign out</button>
        </>}
    </Layout>
  )
}
