import Layout from "../../components/layout";
import {
  getAllFileIds,
  getFileData,
  projectsDirectory,
} from "../../lib/markdown-files";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Icon from "../../components/tech-icon";
import styles from "../../components/project.module.css";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const projectData = await getFileData(params.id, projectsDirectory);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllFileIds(projectsDirectory);
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  return (
    <Layout pic={projectData.gif}>
      <Head>
        <title>{projectData.name}</title>
      </Head>
      <article className={styles.project}>
        <div className={styles.project_info}>
          <p className={styles.project_title}>{projectData.name}</p>
          <p className={styles.project_role}>{projectData.role}</p>
          <div
            className={styles.project_summary}
            dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
          />

          <div className={styles.project_links}>
            <a
              href={projectData.code_link}
              target='_blank'
              rel='noopener noreferrer nofollow'
              title={`Go to ${projectData.name} code repository`}>
              &lt;code&gt;
            </a>
            <a
              href={projectData.deployed_link}
              target='_blank'
              rel='noopener noreferrer nofollow'
              title={`Go to ${projectData.name} deployed site`}>
              &lt;live&gt;
            </a>
          </div>
          <ul className={utilStyles.flexrow}>
            {projectData.techstack.map((tech) => (
              <Icon
                className={styles.stack_card}
                name={`${tech}`}
                id={`${tech}-icon`}></Icon>
            ))}
          </ul>
        </div>
      </article>
    </Layout>
  );
}
