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
