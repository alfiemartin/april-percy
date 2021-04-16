import React from "react";
import styles from "./IntroSection.module.scss";

const IntroSection = () => {
  return (
    <div className={styles.INTRO}>
      <div className={styles.introGrid}>
        <div className={styles.special}>
          <h1>Special Section</h1>
        </div>
        <div className={styles.about}>
          <img src="/keyboard.jpg" alt="do what you love" />
          <div className={styles.textCont}>
            <h1>About Me</h1>
          </div>
        </div>
        <div className={styles.projects}>
          <img src="/projects.jpg" alt="do what you love" />
          <div className={styles.textCont}>
            <h1>Projects</h1>
          </div>
        </div>
        <div className={styles.welcomeText}>
          <h1>Hi, Welcome to my site!</h1>
          <h1>
            <br /> Take a look
          </h1>
        </div>
        <div className={styles.contact}>
          <img src="/contact.jpg" alt="do what you love" />
          <div className={styles.textCont}>
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
