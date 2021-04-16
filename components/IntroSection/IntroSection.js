import React from "react";
import styles from "./IntroSection.module.scss";

const IntroSection = () => {
  return (
    <div className={styles.INTRO}>
      <div className={styles.introGrid}>
        <div className={styles.special}>Special Section</div>
        <div className={styles.about}>About Me</div>
        <div className={styles.projects}>Projects</div>
        <div className={styles.text}>Hi, Welcome to my site!</div>
        <div className={styles.contact}>Contact</div>
      </div>
    </div>
  );
};

export default IntroSection;
