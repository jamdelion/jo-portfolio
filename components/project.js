import styles from './project.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Icon from '../components/tech-icon'

export default function Project(props) {
    return (
        <article className={styles.project}>
        <div className={styles.project_info}>
            <p className={styles.project_title}>{props.project_name}</p>
            <p className={styles.project_role}>Software Developer and QA Lead</p>
            <p className={styles.project_summary}>
              A community-driven app that allows users to rate and find films
              based on gender representation on screens and behind the scenes.
            </p>
            <p>
              - React frontend that comunicates with a Rest API. Film and user's
              data stored using PostgreSQL database.
            </p>
            <p>- Authentication implemented with JWT and CBrypt.</p>
            <p>
              - Ensured over 90% API/FE test coverage and user journeys tested
              with Cypress.
            </p>
            <div className={styles.project_links}>
              <a href="https://github.com/fac19/Bechdel-Beyond-backend" target="_blank" rel="noopener noreferrer nofollow" title="Go to Bechdel and beyond backend repository">&lt;BE code&gt;</a>
              <a href="https://github.com/fac19/Bechdel-Beyond" target="_blank" rel="noopener noreferrer nofollow" title="Go to Bechdel and beyond frontend repository">&lt;FE code&gt;</a>
              <a href="https://bechdelbeyond.netlify.app/" target="_blank" rel="noopener noreferrer nofollow" title="Go to Bechdel and beyond website">&lt;live&gt;</a>
            </div>
            <ul className={utilStyles.flexrow}>
                <Icon className={ styles.stack_card } name={"Javascript"} id={"javascript-icon"}></Icon>
                    <Icon className={styles.stack_card} name={"React"} id={"react-icon"}></Icon>
                    <Icon className={styles.stack_card} name={'Express.js'} id='express-icon'></Icon>
                    <Icon className={styles.stack_card} name={'Styled Components'} id='styledcomponents-icon'></Icon>
                    <Icon className={styles.stack_card} name={'Git & GitHub'} id='git-icon'></Icon>
                    <Icon className={styles.stack_card} name={'Netlify'} id='netlify-icon'></Icon>
            </ul>
        </div>
        <div className="video-desktop">
            <video autoplay="" playsinline="" muted="" loop="" poster="./assets/projects/bechdel.webp" width="100%">
                <source src="./assets/projects/bechdel.mp4" type="video/mp4"></source>
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
        </article>
  )
}