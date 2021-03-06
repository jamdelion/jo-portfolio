import Layout, { siteTitle } from "../components/layout";
import ProjectThumbnail from "../components/project-thumbnail";
import utilStyles from "../styles/utils.module.css";
import { getSortedData, projectsDirectory } from "../lib/markdown-files";
import Link from "next/link";

export async function getServerSideProps() {
  const allProjectsData = getSortedData(projectsDirectory);
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Work({ allProjectsData }) {
  return (
    <Layout>
      <h1>My Work</h1>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={`${utilStyles.list} ${utilStyles.grid}`}>
          {/* thumbnail of picture with overlay of  tech stack icons */}
          {allProjectsData.map(({ id, techstack, name, thumbnail }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
                <a>
                  {/* {name} */}
                  {
                    <ProjectThumbnail
                      thumbnail={thumbnail}
                      name={name}
                      techstack={techstack}></ProjectThumbnail>
                  }
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
