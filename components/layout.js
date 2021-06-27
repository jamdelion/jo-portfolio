import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Nav from "../components/nav";

const name = "Jo";
export const siteTitle = "Jo Humphrey | Developer";

export default function Layout({ children, home, pic }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Portfolio of full-stack developer, Jo Humphrey'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <aside className={`${utilStyles.flexcolumn} ${styles.sidebar}`}>
        <header className={`${utilStyles.flexcolumn} ${styles.header}`}>
          <Image
            priority
            src='/images/profile.jpg'
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
        <Nav></Nav>
        <div>Social media icons here</div>
      </aside>
      <main className={styles.content}>{children}</main>
      {pic && <div className={styles.picture}>Picture here</div>}
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
