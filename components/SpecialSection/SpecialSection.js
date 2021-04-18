import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import styles from "./SpecialSection.module.scss";

const SpecialSection = () => {
  let alfieRef = useRef();
  let martinRef = useRef();
  let contRef = useRef();
  let webRef = useRef();
  let devRef = useRef();
  let elecRef = useRef();
  let engRef = useRef();

  useEffect(() => {
    const alfieAnim = gsap.timeline({
      paused: true,
      onComplete: () => alfieAnim.reverse(),
      onReverseComplete: () => engineerAnim.play(),
    });

    const engineerAnim = gsap.timeline({
      paused: true,
      onComplete: () => engineerAnim.reverse(),
      onReverseComplete: () => alfieAnim.play(),
    });

    alfieAnim.to([alfieRef.current, martinRef.current], {
      visibility: "visible",
      duration: 0,
      delay: 0,
    });
    alfieAnim.from(alfieRef.current, {
      duration: 2,
      x: contRef.current.clientWidth,
      ease: Power3.easeOut,
      delay: 1,
    });
    alfieAnim.from(
      martinRef.current,
      {
        duration: 2,
        x: -contRef.current.clientWidth,
        ease: Power3.easeOut,
      },
      "<"
    );
    alfieAnim.to(
      [alfieRef.current, martinRef.current],
      {
        textShadow: "3px 1px 17px rgba(17, 24, 39,.62)",
        duration: 2.0,
        ease: Power3.easeInOut,
      },
      "<0.5"
    );

    engineerAnim.to(
      [webRef.current, devRef.current, elecRef.current, engRef.current],
      {
        visibility: "visible",
        duration: 0,
        delay: 0,
      }
    );
    engineerAnim.from(
      [webRef.current, devRef.current, elecRef.current, engRef.current],
      {
        opacity: 0,
        duration: 1,
        ease: Power3.easeInOut,
        stagger: {
          amount: 1,
          from: "random",
        },
      }
    );

    alfieAnim.play();
  }, []);

  return (
    <div ref={contRef} className={styles.SPECIAL}>
      <div className={styles.textCont}>
        <h1 ref={alfieRef}>Alfie</h1>
        <h1 ref={martinRef}>Martin</h1>
      </div>
      <div className={`${styles.textCont} ${styles.engineerText}`}>
        <div>
          <h1 ref={webRef}>Web</h1>
          <h1 ref={devRef}>Developer</h1>
        </div>
        <div>
          <h1 ref={elecRef}>Electronic</h1>
          <h1 ref={engRef}>Engineer</h1>
        </div>
      </div>
    </div>
  );
};

export default SpecialSection;
