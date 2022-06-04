import Layout from 'components/layout'
import Link from 'next/link'

export default function Home () {
  return (
    <Layout>
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </Layout>
  )
}
