import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
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
       <h2>
          <Link href="/about-me">
            <a>About Me</a>
          </Link>
        </h2>
        <h2>
          <Link href="/my-work">
            <a>My Work</a>
          </Link>
        </h2>
        <h2>
          <Link href="/tech-stack">
            <a>Tech Stack</a>
          </Link>
        </h2>
        <h2>
          <Link href="/testimonials">
            <a>Testimonials</a>
          </Link>
        </h2>
        <h2>
          <Link href="/contact-me">
            <a>Contact Me</a>
          </Link>
        </h2>
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