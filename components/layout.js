import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Nav from "../components/nav";
import Icon from "../components/tech-icon";

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
          <Link href='/'>
            <a className={utilStyles.center}>
              <Image
                priority
                src='/images/profile.jpg'
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </a>
          </Link>
        </header>
        <Nav></Nav>
        <div className={utilStyles.flexrow}>
          <a href='https://www.linkedin.com/in/jo-humphrey/'>
            <Icon name={""} id='linkedin-icon'></Icon>
          </a>
          <a href='https://github.com/jamdelion'>
            <Icon name={""} id='github-icon'></Icon>
          </a>
        </div>
      </aside>
      <main className={styles.content}>{children}</main>
      {pic && (
        <div className={styles.picture}>
          <Image src={pic} height={400} width={400} alt={pic} />
        </div>
      )}
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>??? Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
