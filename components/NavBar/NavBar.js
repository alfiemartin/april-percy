import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.NAVBAR}>
      <div className={styles.leftSide}>
        <h1>A M</h1>
        <h1>Home</h1>
      </div>
      <div className={styles.rightSide}>
        {/* <h1>Socials</h1> */}
        <h1>alfie.martin@hotmail.co.uk</h1>
      </div>
    </div>
  );
};

export default NavBar;
