import React from "react";
import styles from "./pagehero.module.css";
import Header from "../header/Header";
import Image from "next/image";

const PageHero = ({
  title,
  img,
  subTitle,
  marginBottom,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div style={{ marginBottom: marginBottom }} className={styles.container}>
      <Header />
      <Image
        src={img}
        alt="hero banner"
        className={styles.heroImage}
        width={imgWidth}
        height={imgHeight}
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
