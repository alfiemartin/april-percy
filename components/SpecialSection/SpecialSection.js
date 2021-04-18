import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./SpecialSection.module.scss";

const alfieMartinAnim = (alfieRef, martinRef, contRef) => {
  const alfieAnim = gsap.timeline({
    paused: true,
    onComplete: () => alfieAnim.reverse(),
  });

  alfieAnim.to([alfieRef.current, martinRef.current], {
    visibility: "visible",
    duration: 0,
    delay: 0,
  });

  alfieAnim.from(alfieRef.current, {
    duration: 2,
    x: contRef.current.clientWidth,
    ease: "Power3.easeOut",
    delay: 1,
  });

  alfieAnim.from(
    martinRef.current,
    {
      duration: 2,
      x: -contRef.current.clientWidth,
      ease: "Power3.easeOut",
    },
    "<"
  );

  alfieAnim.to(
    [alfieRef.current, martinRef.current],
    {
      textShadow: "3px 1px 17px rgba(17, 24, 39,.62)",
      duration: 2.0,
      ease: "Power3.easeInOut",
    },
    "<0.5"
  );

  return alfieAnim;
};

const SpecialSection = () => {
  let alfieRef = useRef();
  let martinRef = useRef();
  let contRef = useRef();

  useEffect(() => {
    const alfieMartinTimeline = alfieMartinAnim(alfieRef, martinRef, contRef);
    alfieMartinTimeline.play();
  }, []);

  return (
    <div ref={contRef} className={styles.SPECIAL}>
      <div className={styles.textCont}>
        <h1 ref={alfieRef}>Alfie</h1>
        <h1 ref={martinRef}>Martin</h1>
      </div>
      <div className={`${styles.textCont} ${styles.engineerText}`}>
        <h1>Web Developer</h1>
        <h1>Electronic Engineer</h1>
      </div>
    </div>
  );
};

export default SpecialSection;
