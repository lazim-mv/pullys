import React from "react";
import styles from "./aboutcomponent.module.css";
import Image from "next/image";
import { BtnComponent } from "../common/ButtonComponent";
import Link from "next/link";

const AboutComponent = ({ img, title, desc, buttonText, key, href }) => {
  return (
    <div className={styles.container} key={key}>
      <Image src={img} alt="about Image" className={styles.aboutImage} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{desc}</p>
        {buttonText && (
          <Link href={href}>
            <BtnComponent buttonText={buttonText} bg="#002D4C" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default AboutComponent;
