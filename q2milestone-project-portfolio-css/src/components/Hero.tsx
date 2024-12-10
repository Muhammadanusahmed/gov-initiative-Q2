import Image from "next/image";
import Style from "@/style/Hero.module.css";
function Hero() {
  return (
    <div className={Style.heroContainer}>
      <div className={Style.imageContainer}>
        <Image 
          src="/hero.jpg" 
          className={Style.heroImage}
          alt="hero" 
          width={300} 
          height={300} 
        />
      </div>

      <div className={Style.textContainer}>
        <h1 className={Style.heroTitle}>Frontend Developers</h1>
        <p className={Style.heroDescription}>
          I am a passionate web designer and developer with experience in creating custom websites for
          various industries, including business management, fitness, gaming, e-commerce, and restaurants.
          My goal is to deliver visually appealing and user-friendly websites tailored to your specific needs.
        </p>
      </div>
    </div>
  );
};

export default Hero;
