import React from "react";
import styles from "./container5.module.css";
import Image from "next/image";
import { BtnComponent } from "../common/ButtonComponent";

const Container5 = ({ title, img, desc, buttonText, href, page }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 style={{ textAlign: page && "left" }}>{title}</h2>
        <p>{desc}</p>
        {buttonText && (
          <a href={href}>
            <BtnComponent buttonText={buttonText} bg="#002D4C" />
          </a>
        )}
      </div>
      <Image src={img} alt="about Image" className={styles.aboutImage} />
    </div>
  );
};

export default Container5;
