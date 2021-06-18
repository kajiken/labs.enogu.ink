import Head from "next/head";
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
        <h1>Hello.</h1>
      </main>
    </div>
  );
}
