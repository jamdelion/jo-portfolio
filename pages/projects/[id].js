import Layout from '../../components/layout'
import { getAllFileIds, getFileData, projectsDirectory } from '../../lib/markdown-files'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

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
            <title>{projectData.title}</title>
        </Head>
     <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={projectData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  )
}