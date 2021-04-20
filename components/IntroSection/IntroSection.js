import React from "react";
import styles from "./IntroSection.module.scss";
import SpecialSection from "../SpecialSection/SpecialSection";

const IntroSection = (props) => {
  return (
    <div className={styles.INTRO}>
      <div className={styles.introGrid}>
        <div className={styles.special}>
          <SpecialSection />
        </div>
        <div className={styles.about}>
          <img
            src="/letters.jpg"
            alt="Letter A"
            onClick={() =>
              props.aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
          <div className={styles.textCont}>
            <h1>About Me</h1>
          </div>
        </div>
        <div className={styles.projects}>
          <img
            src="/projects.jpg"
            alt="Designing a chair"
            onClick={() =>
              props.projectsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
          <div className={styles.textCont}>
            <h1>Projects</h1>
          </div>
        </div>
        <div className={styles.welcomeText}>
          <div className={styles.secondLine}>
            <h1>
              <br /> Take a look around
            </h1>
            <img src="arrow.png" alt="arrow" />
          </div>
        </div>
        <div className={styles.contact}>
          <img
            src="/contact.jpg"
            alt="phone"
            onClick={() =>
              props.contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
          <div className={styles.textCont}>
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
