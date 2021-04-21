import React, { useRef, useEffect } from "react";
import styles from "./Projects.module.scss";

const NeurifyCard = () => {
  return (
    <div className={`${styles.projectCard} ${styles.neurify}`}>
      <h1>neurify</h1>
      <p>
        neurify combines expert social media knowledge with technology to
        deliver high quality campaigns.
        <br />
        <br />
        Wordpress <br />
        Elementor <br />
        PHP <br />
        JavaScript <br />
        CSS
      </p>
      <div className={styles.buttons}>
        <button>
          <a href="/" target="_blank">
            Code Unavailable
          </a>
        </button>
        <button>
          <a href="https://www.neurify.co.uk/" target="_blank">
            Live
          </a>
        </button>
      </div>
      <div className={styles.imageCont}>
        {/* <img src="dwyl.jpg" alt="" /> */}
      </div>
    </div>
  );
};

const AlbaCard = () => {
  return (
    <div className={`${styles.projectCard} ${styles.alba}`}>
      <h1>Alba Mind</h1>
      <p>
        The socially distant ad campaign for Alba Mind.
        <br />
        <br />
        <br />
        <br />
        NextJS <br />
        SCSS <br />
        TypeScript <br />
        MaterialUI <br />
        Vercel
      </p>
      <div className={styles.buttons}>
        <button>
          <a
            href="https://github.com/alfiemartin/antisocially-distant"
            target="_blank"
          >
            Code
          </a>
        </button>
        <button>
          <a href="https://socially-distant.me//" target="_blank">
            Live
          </a>
        </button>
      </div>
      <div className={styles.imageCont}>
        {/* <img src="dwyl.jpg" alt="" /> */}
      </div>
    </div>
  );
};

const RDMCard = () => {
  return (
    <div className={`${styles.projectCard} ${styles.rdm}`}>
      <h1>RDM Technology</h1>
      <p>
        Redesign of the old website with a modern design and scroll animations.
        <br />
        <br />
        <br />
        NextJS <br />
        TailwindCSS <br />
        CSS
      </p>
      <div className={styles.buttons}>
        <button>
          <a
            href="https://github.com/alfiemartin/RDM-Technology"
            target="_blank"
          >
            Code
          </a>
        </button>
        <button>
          <a href="http://www.rdmtechnology.com/" target="_blank">
            Live
          </a>
        </button>
      </div>
      <div className={styles.imageCont}>
        {/* <img src="dwyl.jpg" alt="" /> */}
      </div>
    </div>
  );
};

const TapFlashCard = () => {
  return (
    <div className={`${styles.projectCard} ${styles.tapflash}`}>
      <h1>Tap Flash</h1>
      <p>
        A simple game I used to play as a kid, recreated using React.
        <br />
        <br />
        <br />
        <br />
        ReactJS <br />
        SCSS <br />
        Firebase Hosting <br />
        Firebase Firestore
      </p>
      {/* background image */}
      <div className={styles.buttons}>
        <button>
          <a href="https://github.com/alfiemartin/TapFlash" target="_blank">
            Code
          </a>
        </button>
        <button>
          <a href="https://tapflash-77edb.web.app/" target="_blank">
            Live
          </a>
        </button>
      </div>
      <div className={styles.imageCont}>
        {/* <img src="dwyl.jpg" alt="" /> */}
      </div>
    </div>
  );
};

const ChatroomCard = () => {
  return (
    <div className={`${styles.projectCard} ${styles.chatroom}`}>
      <h1>Chatroom</h1>
      <p>
        A basic chatroom based off Firebase databases and also uses
        authetication.
        <br /> <br /> <br /> ReactJS <br />
        SCSS <br />
        Firebase Hosting <br />
        Firebase Firestore
      </p>
      {/* background image */}
      <div className={styles.buttons}>
        <button>
          <a
            href="https://github.com/alfiemartin/Basic-Messaging-App"
            target="_blank"
          >
            Code
          </a>
        </button>
        <button>
          <a href="https://chatroom-c36ed.web.app/" target="_blank">
            Live
          </a>
        </button>
      </div>
      <div className={styles.imageCont}>
        {/* <img src="dwyl.jpg" alt="" /> */}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className={styles.PROJECTS}>
      <div className={styles.projectCarousel}>
        <NeurifyCard />
        <AlbaCard />
        <RDMCard />
        <TapFlashCard />
        <ChatroomCard />
      </div>
      <div className={styles.messageSection}>
        <h1>Ongoing projects will be added to this list upon completion. </h1>
        <h2>Coming soon: ECommerce Shop 🔥</h2>
      </div>
    </div>
  );
};

export default Projects;
//make buttons appear on hover
