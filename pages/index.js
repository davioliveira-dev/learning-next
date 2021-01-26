import Layout, { siteTitle } from './components/layout';

import Head from 'next/head'
import utilStyles from './styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.centerText}>Hi! I'm Davi!</h1>
        <h1>I'm 17 years old and i'm learning JS and Kotlin</h1>
        <p>I have experience in React, React Native and Node.js!</p>
        <p>and i also have experience in Java and Groovy.</p>
        <p>I'm studing programming since 2018, and I currently have 8 months of professional experience!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      
    </Layout>
  )
}
