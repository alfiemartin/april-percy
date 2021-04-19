import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.CONTACT}>
      <div className={styles.contactGrid}>
        <h1>Get In Touch</h1>
        <div>
          <img src="/linkedin.svg" alt="LinkedIn" />
          <h1>LinkedIn</h1>
        </div>
        <div>
          <img src="/linkedin.svg" alt="LinkedIn" />
          <h1>GitGub</h1>
        </div>
        <div>
          <img src="/linkedin.svg" alt="LinkedIn" />
          <h1>07528559068</h1>
        </div>
        <div>
          <img src="/linkedin.svg" alt="LinkedIn" />
          <h1>alfie.martin@hotmail.co.uk</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
