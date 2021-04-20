import Head from "next/head";

import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar/NavBar";
import IntroSection from "../components/IntroSection/IntroSection";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [sectionState, setSectionState] = useState("Home");
  let aboutRef = useRef();
  let projectsRef = useRef();
  let contactRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (contactRef.current.getBoundingClientRect().top <= 80)
        setSectionState("Contact");
      else if (projectsRef.current.getBoundingClientRect().top <= 80)
        setSectionState("Projects");
      else if (aboutRef.current.getBoundingClientRect().top <= 80)
        setSectionState("About");
      else setSectionState("Home");
    });
  });

  return (
    <>
      <Head>
        <title>Alfie Martin</title>
      </Head>
      <div className={styles.HOME}>
        <NavBar sectionState={sectionState} />
        <IntroSection
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}
