import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Nav from '../components/nav'
import utilStyles from '../styles/utils.module.css'
import { getSortedData, postsDirectory } from '../lib/markdown-files'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedData(postsDirectory)
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Jo.</p>
        <p>
          (This is a work in progress - for now, please check out {' '}
          <a href="https://www.github.com/jamdelion">my GitHub</a>.)
        </p>
        <Nav></Nav>
      </section>
       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>

          ))}
        </ul>
      </section>
    </Layout>
  )
}
