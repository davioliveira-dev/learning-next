import Head from 'next/head'
import Link from 'next/link'
import styles from './first-post.module.css';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <div className={styles.container}>
        <h1>First Post</h1>
        <img src="/vercel.svg" alt="Vercel logo"/>
        <h2>
          <Link href="/">
            <a>Back to home!</a>
          </Link>
        </h2>
      </div>
    </>
  )
}