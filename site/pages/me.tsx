import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Me() {
  return (
    <div className={styles.container}>
      <Head>
        <title>enogu.ink | HOME</title>
      </Head>

      <Header hideNavigation={true} />

      <main className={styles.main}>
        <h1>Hello.</h1>
      </main>
    </div>
  );
}
