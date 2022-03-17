import Head from "next/head";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar/NavBar";
import IntroSection from "../components/IntroSection/IntroSection";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { useRef, useState, useEffect } from "react";
import Modal from "react-modal";
import Cookies from "js-cookie";

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

  const alreadySeenModal = Cookies.get('modal-seen') === 'true';

  const [showModal, setShowModal] = useState(!alreadySeenModal);
  const handleModal = () => {
    setShowModal(prev => !prev);

    Cookies.set('modal-seen', 'true');
  }

  return (
    <>
      <Head>
        <title>Alfie Martin</title>
      </Head>
      <div className={styles.HOME}>
        <NavBar sectionState={sectionState} />
        <Modal isOpen={showModal} style={{overlay: {width: "100vw", height: "100vh", display: 'grid', placeItems: 'center'}}} contentElement={() => (
          <div style={{display: 'grid', placeItems: 'center'}}>
            <h1>New site coming soon 😩😩</h1>
            <h2 style={{textDecoration: 'underline', marginBottom: '60px'}}><a href="https://portfolio-2022-zeta.vercel.app/" target="_blank">Click here to see a preview</a></h2>
            <button onClick={handleModal} style={{border: 'none', background: 'none'}}><h2 style={{textDecoration: 'underline'}}>Close this message</h2></button>
          </div>
        )} />
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
