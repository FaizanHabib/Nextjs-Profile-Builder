import type { NextPage } from "next";
import Head from "next/head";
import SpaceAddComponent from "../src/components/SpaceAddComponent";
import Swithcer from "../src/components/Switcher/Swithcer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Swithcer />
        <SpaceAddComponent />
      </main>
    </div>
  );
};

export default Home;
