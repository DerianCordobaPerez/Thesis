'use client'

import Link from 'next/link'
import { signOut, signIn } from 'next-auth/react'
import { withSession } from 'hoc/withSession'

function Home ({ session }) {
  return (
    <>
      <nav>
        <Link href="/about">
          About
        </Link>
      </nav>

      {session
        ? (
          <>
            <h1>
              {JSON.stringify(session)}
            </h1>

            <button onClick={() => signOut()}>Sign out</button>
          </>)
        : (
          <>
            <h1>
              Sign in
            </h1>

            <button onClick={() => signIn()}>Sign in with Credentials</button>
          </>
        )}
    </>
  )
}

export default withSession(Home)
