import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import Link from "next/link";

export default function Home({
                               allPostsData
                             }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello, I'm Nicole.</p>
          <p>
            (This is a sample website - you’ll be building a site like this in{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
          <section>
              <Link href={"posts/first-post"}>First post is here</Link>
          </section>
      </Layout>
  )
}