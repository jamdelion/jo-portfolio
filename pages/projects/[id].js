import Layout from '../../components/layout'
import { getAllFileIds, getFileData, projectsDirectory } from '../../lib/markdown-files'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Icon from '../../components/tech-icon'
import styles from '../../components/project.module.css'
import Link from 'next/link'

export async function getStaticProps({ params }) {
  const projectData = await getFileData(params.id, projectsDirectory)
  return {
    props: {
      projectData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllFileIds(projectsDirectory)
  return {
    paths,
    fallback: false
  }
}

export default function Project({ projectData }) {
  return (
      <Layout>
        <Head>
            <title>{projectData.name}</title>
        </Head>
        <article className={styles.project}>
          <div className={styles.project_info}>
              <p className={styles.project_title}>{projectData.name}</p>
              <p className={styles.project_role}>{projectData.role}</p>
              <div className={styles.project_summary} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                
              <div className={styles.project_links}>
              <a href={projectData.backend_link} target="_blank" rel="noopener noreferrer nofollow" title={`Go to ${projectData.name} backend repository`}>&lt;BE code&gt;</a>
                <a href={projectData.frontend_link} target="_blank" rel="noopener noreferrer nofollow" title={`Go to ${projectData.name} frontend repository`}>&lt;FE code&gt;</a>
                <a href={projectData.deployed_link} target="_blank" rel="noopener noreferrer nofollow" title={`Go to ${projectData.name} deployed site`}>&lt;live&gt;</a>
              </div>
              <ul className={utilStyles.flexrow}>
                  {projectData.techstack.map((tech) => (
              <Icon className={styles.stack_card} name={`${tech}`} id={`${tech}-icon`}></Icon>
          ))}
              </ul>
          </div>
          <div className="video-desktop">
              <video autoPlay="" playsInline="" muted="" loop="" poster="./assets/projects/bechdel.webp" width="100%">
                  <source src="./assets/projects/bechdel.mp4" type="video/mp4"></source>
                  Sorry, your browser doesn't support embedded videos.
              </video>
          </div>
          </article>
    </Layout>
  )
}