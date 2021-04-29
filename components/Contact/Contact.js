import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.CONTACT}>
      <div className={styles.contactGrid}>
        <h1>Get In Touch</h1>
        <div className={styles.linkedIn}>
          <img src="/linkedin.svg" alt="LinkedIn" />
          <h2>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alfie-martin99/"
            >
              LinkedIn
            </a>
          </h2>
        </div>
        <div className={styles.github}>
          <img src="/github.svg" alt="LinkedIn" />
          <h2>
            <a target="_blank" href="https://github.com/alfiemartin">
              Github
            </a>
          </h2>
        </div>
        <div className={styles.phone}>
          <img src="/phone-call.svg" alt="LinkedIn" />
          <h2>
            <a href="tel:+447528559068">07528559068</a>
          </h2>
        </div>
        <div className={styles.email}>
          <img src="email.svg" alt="LinkedIn" />
          <h2>
            <a href="mailto:alfie.martin@hotmail.co.uk">
              alfie.martin@hotmail.co.uk
            </a>
          </h2>
        </div>
        <div className={styles.cv}>
          <img src="email.svg" alt="LinkedIn" />
          <h2>
            <a href="/AlfieMcv.pdf">View CV</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
