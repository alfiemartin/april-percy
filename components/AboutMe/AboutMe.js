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
        <h1 className={styles.intro}>I'm Alfie</h1>
        <p className={styles.extended}>
          Recent Graduate of Electrical and Electronic Engineering
        </p>
        <img
          className={styles.headShot}
          src="alfie-head1.JPG"
          alt="Alfie Martin"
        />
        <p className={styles.paragraph}>
          After completion of my degree from Newcastle University in the 2020
          summer, my brother and I began the digital marketing company: neurify.
          It was here i began working as a Web Developer. I started from basic
          Wordpress sites using Elementor to the point now where i am well
          versed in many aspects of Web Development, particularly front-end
          development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
