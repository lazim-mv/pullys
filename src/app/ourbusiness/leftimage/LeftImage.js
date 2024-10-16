import React from "react";
import styles from "./leftImage.module.css";
import Image from "next/image";
import { BtnComponent } from "@/app/components/common/ButtonComponent";

const LeftImage = ({
  leftImg,
  rightImg,
  title,
  desc,
  buttonText,
  key,
  list,
}) => {
  return (
    <div className={styles.container} key={key}>
      {leftImg && (
        <Image src={leftImg} alt="about Image" className={styles.aboutImage} />
      )}
      <div className={styles.content}>
        <h2>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        {list &&
          list.map((item, index) => (
            <div className={styles.list} key={index}>
              <div className={styles.dot}></div>
              <p>{item}</p>
            </div>
          ))}
        {buttonText && <BtnComponent buttonText={buttonText} bg="#002D4C" />}
      </div>
      {rightImg && (
        <Image src={rightImg} alt="about Image" className={styles.aboutImage} />
      )}
    </div>
  );
};

export default LeftImage;
