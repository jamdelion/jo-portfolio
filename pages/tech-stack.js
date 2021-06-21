import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from './techstack.module.css'
import Icon from '../components/tech-icon'

export default function Stack() {
    return (
       <Layout>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.viewheight}>
            <h1>Tech Stack</h1>
            {/* <h3 className="page__subtitle page__titles section-padding">Tech Stack</h3> */}
                <ul className={styles.techstack__list}>
                    <Icon name={'HTML'} id='html-icon'></Icon>
                    <Icon name={'CSS'} id='css-icon'></Icon>
                    <Icon name={'Javascript'} id='javascript-icon'></Icon>
                    <Icon name={'Node.js'} id='node-icon'></Icon>
                    <Icon name={'Express.js'} id='express-icon'></Icon>
                    <Icon name={'PostgreSQL'} id='postgresql-icon'></Icon>
                    <Icon name={'React.js'} id='react-icon'></Icon>
                    <Icon name={'Styled Components'} id='styledcomponents-icon'></Icon>
                    <Icon name={'Git & GitHub'} id='git-icon'></Icon>
                    <Icon name={'Prettier'} id='prettier-icon'></Icon>
                    <Icon name={'ES Lint'} id='eslint-icon'></Icon>
                    <Icon name={'Netlify'} id='netlify-icon'></Icon>
                    <Icon name={'Heroku'} id='heroku-icon'></Icon>
                    <Icon name={'Vercel'} id='vercel-icon'></Icon>
                    <Icon name={'Figma'} id='figma-icon'></Icon>
                    <Icon name={'Jira'} id='jira-icon'></Icon>
                </ul>
        </section> 
      </Layout>	  
   )
}


