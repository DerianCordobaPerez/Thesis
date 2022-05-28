import Head from 'next/head'
import Footer from './footer'
import styles from 'styles/Home.module.scss'

export default function Layout ({ children, title }) {
  title ??= 'Home'

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Thesis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  )
}
