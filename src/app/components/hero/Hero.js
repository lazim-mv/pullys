"use client";
import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import heroImage from "../../../../public/hero/hero.png";
import heroImageMobile from "../../../../public/hero/m3hero.png";
import { useViewport } from "@/app/context/ViewportContext";

const Hero = () => {
  const viewport = useViewport();
  const isMobile = viewport === "mobile";

  return (
    <div className={styles.container}>
      <Image
        src={isMobile ? heroImageMobile : heroImage}
        alt="hero banner"
        className={styles.heroImage}
      />
      <div className={styles.heroContentContainer}>
        <div className={styles.contents}>
          <h1>Welcome to pullysons Groups</h1>
          <p>
            With over 45 years of experience, we take pride in our journey from
            a modest spice trading business to a diversified enterprise. Explore
            our story, our commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
