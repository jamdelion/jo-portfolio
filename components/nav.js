import styles from './nav.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
    <nav className={ styles.navbar } >
          <Link href="/about-me">
                <a className={styles.navbar__item}>About Me</a>
          </Link>
          <Link href="/my-work">
            <a className={styles.navbar__item}>My Work</a>
          </Link>
          <Link href="/tech-stack">
                <a className={styles.navbar__item}>Tech Stack</a>
            </Link>
          <Link href="/testimonials">
            <a className={styles.navbar__item}>Testimonials</a>
          </Link>
          <Link href="/contact-me">
            <a className={styles.navbar__item}>Contact Me</a>
          </Link>
    </nav>
  )
}