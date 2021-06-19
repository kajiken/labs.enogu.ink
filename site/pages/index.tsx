import Head from "next/head";
import Link from "next/link";
import AvatarImage from "../components/AvatarImage";
import GitHubIcon from "../components/GitHubIcon";
import Header from "../components/Header";
import TwitterIcon from "../components/TwitterIcon";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>enogu.ink | HOME</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.h1}>
          <Link href="/me">
            <a className={styles.anchor}>
              <AvatarImage />
            </a>
          </Link>
        </h1>
        <section className={styles.section}>
          <a href="https://t.enogu.ink" className={styles.til}>
            TIL
          </a>
        </section>
        <section className={styles.section}>
          <ul className={styles.ul}>
            <li>
              <a
                href="https://twitter.com/kajiken"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.anchor}
              >
                <TwitterIcon size={64} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kajiken"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.anchor}
              >
                <GitHubIcon size={64} />
              </a>
            </li>
            <li></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
