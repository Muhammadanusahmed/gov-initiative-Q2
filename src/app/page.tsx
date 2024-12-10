import Sec3 from "@/components/Section3";
import Sec2 from "@/components/Section2"
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero  />
      <Sec2 />
      <Sec3 />
      <Contact />

    </div>
  );
}