import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About me page</h1>
      </main>
    </div>
  );
};

export default About;
