import Link from "next/link";
import Style from "@/style/Section3.module.css";
export default function Sectiion3() {

  return (
  
    <section className={Style.section}>
      <div className={Style.container}>
        {/* Section Heading */}
        <div className={Style.textCenter}>
          <p className={Style.sectionHeading}>My Services</p>
        </div>

        {/* Service Content */}
        <div className={Style.serviceContainer}>
          <div className={Style.card}>
            <h1 className={Style.cardHeading}>Website Development - Custom Solutions</h1>
            <p className={Style.cardDiscription}>
              Elevate your business with a custom-built website. I create unique, professional websites with responsive layouts and modern design elements, ensuring a seamless experience on any screen size while optimizing for user experience.
            </p>
          </div>
          <div className={Style.card}>
            <h1 className={Style.serviceHeading}>Website Maintenance & SEO Optimization</h1>
            <p className={Style.serviceDescription}>Keep your website updated and optimized. I handle regular maintenance, performance enhancements, and SEO best practices to ensure your site is always fast, secure, and search-engine-friendly.
           </p>
          </div>
          <div className={Style.card}>
            <h1 className={Style.serviceHeading}>Graphic Designing</h1>
            <p className={Style.serviceDescription}>Bring your brand to life with creative graphic design. I design logos, social media graphics, and marketing materials that effectively communicate your message and create a visually engaging experience.
            </p>
          </div>

          
        </div>
        
        {/* Button */} 
        <div className={Style.buttonContainer}>
            <Link href="#experience" className={Style.button}>
              See What Tools I Use
            </Link>
          </div>
      </div>
    </section>
  );
};

