import Layout, { siteTitle } from '../components/layout'
import Project from '../components/project'

export default function Work() {
   return (
      <Layout>
           <h1>My Work</h1>
           <Project project_name={"TeleGran"}></Project>
           <Project project_name={"Grinder"}></Project>
      </Layout>	  
   )
}