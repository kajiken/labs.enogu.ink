import Head from "next/head";
import Link from "next/link";
import AvatarImage from "../components/AvatarImage";
import GitHubIcon from "../components/GitHubIcon";
import TwitterIcon from "../components/TwitterIcon";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>enogu.ink | HOME</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.colorBoxListWrapper}>
          <div className={styles.colorboxBlue}></div>
          <div className={styles.colorboxRed}></div>
          <div className={styles.colorboxYellow}></div>
          <div className={styles.colorboxLightBlue}></div>
          <div className={styles.colorboxGreen}></div>
        </div>
        <div className={styles.colorBoxBorderWrapper}>
          <div className={styles.colorboxCyan}></div>
        </div>
      </header>

      <main className={styles.main}>
        <h1>
          <ul className={styles.ul}>
            <li>
              <a
                href="https://twitter.com/kajiken"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.anchor}
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kajiken"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.anchor}
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <Link href="/me">
                <a href="me" className={styles.anchor}>
                  <AvatarImage />
                </a>
              </Link>
            </li>
          </ul>
        </h1>
      </main>
    </div>
  );
}
