import styles from "./project.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Icon from "./tech-icon";
import Image from "next/image";
import React, { useState } from "react";

export default function ProjectThumbnail(props) {
  const [fadedState, setFadedState] = useState(false);
  const [invisibleState, setInvisibleState] = useState(true);

  return (
    <div
      className={styles.project_container}
      onMouseEnter={() => {
        setFadedState(true);
        setInvisibleState(false);
      }}
      onMouseLeave={() => {
        setFadedState(false);
        setInvisibleState(true);
      }}>
      <Image
        className={fadedState ? utilStyles.faded : ""}
        src={props.thumbnail}
        height={300}
        width={300}
        alt={props.name}
      />
      {/* <div> */}
      <ul className={invisibleState ? utilStyles.invisible : styles.overlay}>
        {props.techstack.map((tech) => (
          <Icon
            className={styles.stack_card}
            name={`${tech}`}
            id={`${tech}-icon`}></Icon>
        ))}
      </ul>
      {/* </div> */}
    </div>
  );
}

// export default function Project(props) {
//     return (
//         <article className={styles.project}>
//         <div className={styles.project_info}>
//             <p className={styles.project_title}>{props.project_name}</p>
//             <p className={styles.project_role}>Software Developer and QA Lead</p>
//             <p className={styles.project_summary}>
//               A community-driven app that allows users to rate and find films
//               based on gender representation on screens and behind the scenes.
//             </p>
//             <p>
//               - React frontend that comunicates with a Rest API. Film and user's
//               data stored using PostgreSQL database.
//             </p>
//             <p>- Authentication implemented with JWT and CBrypt.</p>
//             <p>
//               - Ensured over 90% API/FE test coverage and user journeys tested
//               with Cypress.
//             </p>
//             <div className={styles.project_links}>
//               <a href="https://github.com/fac19/Bechdel-Beyond-backend" target="_blank" rel="noopener noreferrer nofollow" title="Go to Bechdel and beyond backend repository">&lt;BE code&gt;</a>
//               <a href="https://github.com/fac19/Bechdel-Beyond" target="_blank" rel="noopener noreferrer nofollow" title="Go to Bechdel and beyond frontend repository">&lt;FE code&gt;</a>
//               <a href="https://bechdelbeyond.netlify.app/" target="_blank" rel="noopener noreferrer nofollow" title="Go to Bechdel and beyond website">&lt;live&gt;</a>
//             </div>
//             <ul className={utilStyles.flexrow}>
//                 <Icon className={ styles.stack_card } name={"Javascript"} id={"javascript-icon"}></Icon>
//                     <Icon className={styles.stack_card} name={"React"} id={"react-icon"}></Icon>
//                     <Icon className={styles.stack_card} name={'Express.js'} id='express-icon'></Icon>
//                     <Icon className={styles.stack_card} name={'Styled Components'} id='styledcomponents-icon'></Icon>
//                     <Icon className={styles.stack_card} name={'Git & GitHub'} id='git-icon'></Icon>
//                     <Icon className={styles.stack_card} name={'Netlify'} id='netlify-icon'></Icon>
//             </ul>
//         </div>
//         <div className="video-desktop">
//             <video autoPlay="" playsInline="" muted="" loop="" poster="./assets/projects/bechdel.webp" width="100%">
//                 <source src="./assets/projects/bechdel.mp4" type="video/mp4"></source>
//                 Sorry, your browser doesn't support embedded videos.
//             </video>
//         </div>
//       </article>
//   )
// }
