import React from "react";
import Image from "next/image";
import Data from "@/data/Sec2card.json";
import Style from "@/style/Section2.module.css";

export default function Section2() {
  interface Courses {
    id: number;
    title: string;
    image_url: string;
  }

  return (
    <div className={Style.sectionContainer}>
      <h1 id="experience" className={Style.sectionTitle}>
        MY CORE DEVELOPMENT SKILLS
      </h1>

      <div className={Style.gridContainer}>
        {Data.map((item: Courses) => (
          <div key={item.id} className={Style.card}>
            <div className={Style.cardContent}>
              <Image
                src={item.image_url}
                alt="jordans"
                height={120}
                width={120}
                className={Style.cardImage}
              />
              <p className={Style.cardTitle}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
