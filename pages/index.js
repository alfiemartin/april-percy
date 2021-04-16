import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar/NavBar";
import IntroSection from "../components/IntroSection/IntroSection";
import AboutMe from "../components/AboutMe/AboutMe";

export default function Home() {
  return (
    <div className={styles.HOME}>
      <NavBar />
      <IntroSection />
      <AboutMe />
    </div>
  );
}
