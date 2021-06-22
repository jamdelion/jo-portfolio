import Layout, { siteTitle } from '../components/layout'
import Project from '../components/project'
import utilStyles from '../styles/utils.module.css'
import { getSortedData, projectsDirectory } from '../lib/markdown-files'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allProjectsData = getSortedData(projectsDirectory)
  return {
    props: {
      allProjectsData
    }
  }
}

export default function Work({ allProjectsData }) {
   return (
      <Layout>
           <h1>My Work</h1>
           <Project project_name={"TeleGran"}></Project>
         <Project project_name={"Grinder"}></Project>
         ---
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
               <h2 className={utilStyles.headingLg}>Projects</h2>
               <ul className={utilStyles.list}>
                  {allProjectsData.map(({ id, date, title }) => (
                     <li className={utilStyles.listItem} key={id}>
                     <Link href={`/projects/${id}`}>
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