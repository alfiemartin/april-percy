import Head from "next/head";

import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar/NavBar";
import IntroSection from "../components/IntroSection/IntroSection";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { useState } from "react";

export default function Home() {
  const [sectionState, setSectionState] = useState("Home");

  return (
    <>
      <Head>
        <title>Alfie Martin</title>
      </Head>
      <div className={styles.HOME}>
        <NavBar sectionState={sectionState} />
        <IntroSection />
        <AboutMe setSectionState={setSectionState} />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
