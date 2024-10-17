"use client";
import React, { useEffect } from "react";
import styles from "./pagehero.module.css";
import Header from "../header/Header";
import Image from "next/image";

const PageHero = ({ title, img, subTitle, marginBottom, host }) => {
  console.log("pagehero");
  console.log(host, "hostof");

  return (
    <div style={{ marginBottom: marginBottom }} className={styles.container}>
      <Header />
      <Image
        src={img}
        alt="hero banner"
        className={styles.heroImage}
        width={isMobile ? 375 : 1512}
        height={isMobile ? 300 : 500}
        loading="eager"
        quality={100}
      />
      <div className={styles.heroContentContainer}>
        <div className={styles.contents}>
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
