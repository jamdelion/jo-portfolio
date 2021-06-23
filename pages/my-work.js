import Layout, { siteTitle } from '../components/layout'
import ProjectThumbnail from '../components/project'
import utilStyles from '../styles/utils.module.css'
import { getSortedData, projectsDirectory } from '../lib/markdown-files'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

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
           {/* <Project project_name={"TeleGran"}></Project>
         <Project project_name={"Grinder"}></Project> */}
         ---
         
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
               <h2 className={utilStyles.headingLg}>Projects</h2>
                  <ul className={utilStyles.list}>
               {/* thumbnail of picture with overlay of  tech stack icons */}
               {allProjectsData.map(({ id, techstack, name, thumbnail }) => (
                  
                     <li className={utilStyles.listItem} key={id}>
                     <Link href={`/projects/${id}`}>
                        <a>{name}</a>
                     </Link>
                        <br />
                        <ProjectThumbnail thumbnail={thumbnail} name={name}></ProjectThumbnail>
                     </li>
                  ))}
               </ul>
         </section>
      </Layout>	  
   )
}