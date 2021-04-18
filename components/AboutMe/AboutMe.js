import React, { useEffect, useRef } from "react";
import styles from "./AboutMe.module.scss";

const AboutMe = ({ setSectionState }) => {
  let aboutRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (aboutRef.current.getBoundingClientRect().top <= 80)
        setSectionState("About");
      else setSectionState("Home");
    });
  });

  return (
    <div ref={aboutRef} className={styles.ABOUT}>
      <div className={styles.aboutGrid}>
        <h1 className={styles.intro}>Hi, I'm Alfie</h1>
        <p className={styles.extended}>
          Recent Graduate of Electrical and Electronic Engineering
        </p>
        <img
          className={styles.headShot}
          src="alfie-head1.JPG"
          alt="Alfie Martin"
        />
      </div>
    </div>
  );
};

export default AboutMe;
