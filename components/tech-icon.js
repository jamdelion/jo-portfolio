import styles from "../pages/techstack.module.css";

export default function Icon(props) {
  return (
    <li className={styles.techstack__listitem}>
      <svg role='img' viewBox='0 0 25 25'>
        <use href={`/images/icons.svg#${props.id}`}></use>
      </svg>
      <p>{props.name}</p>
    </li>
  );
}
