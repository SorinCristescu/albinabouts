import Head from "next/head";
import styles from "../styles/Home.module.css";

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Portfolio page</h1>
      </main>
    </div>
  );
};

export default Portfolio;
