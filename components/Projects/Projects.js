import React from "react";
import styles from "./Projects.module.scss";

const NeurifyCard = () => {
  return (
    <div className={`${styles.projectCard} ${styles.neurify}`}>
      <h1>neurify</h1>
      <p>React, CSS....</p>
      {/* background image */}
      <div className={styles.buttons}>
        <button>Code</button>
        <button>Live</button>
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
      <p>React, CSS....</p>
      {/* background image */}
      <div className={styles.buttons}>
        <button>Code</button>
        <button>Live</button>
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
      <p>React, CSS....</p>
      {/* background image */}
      <div className={styles.buttons}>
        <button>Code</button>
        <button>Live</button>
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
      <p>React, CSS....</p>
      {/* background image */}
      <div className={styles.buttons}>
        <button>Code</button>
        <button>Live</button>
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
      <p>React, CSS....</p>
      {/* background image */}
      <div className={styles.buttons}>
        <button>Code</button>
        <button>Live</button>
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
    </div>
  );
};

export default Projects;
//make buttons appear on hover
