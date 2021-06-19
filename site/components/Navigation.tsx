import Link from "next/link";
import GitHubIcon from "../components/GitHubIcon";
import TwitterIcon from "../components/TwitterIcon";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.left}>
        <Link href="/">
          <a className={styles.anchor}>← Back to Home</a>
        </Link>
      </div>
      <div className={styles.right}>
        <ul className={styles.ul}>
          <li className={styles.icon}>
            <a
              href="https://twitter.com/kajiken"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon size={40} />
            </a>
          </li>
          <li className={styles.icon}>
            <a
              href="https://github.com/kajiken"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={40} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
