import React from "react";
import styles from "./arrowbutton.module.css";
import Image from "next/image";
import rightArrow from "../../../../../public/common/right.svg";
import leftArrow from "../../../../../public/common/leftarrow.svg";

const ArrowButtons = ({ nextImage, prevImage, margin, width }) => {
  return (
    <div
      className={styles.carouselButtonContainer}
      style={{ margin: margin, width: width }}
    >
      <div
        onClick={prevImage}
        className={`${styles.carouselButtonContainerLeft} ${styles.carouselHover}`}
      >
        <Image
          width={377}
          height={420}
          src={leftArrow}
          alt="arrow"
          className={styles.arrow}
        />
      </div>
      <div
        onClick={nextImage}
        className={`${styles.carouselButtonContainerRight} ${styles.carouselHover}`}
      >
        <Image
          width={377}
          height={420}
          src={rightArrow}
          alt="arrow"
          className={styles.arrow}
        />
      </div>
    </div>
  );
};

export default ArrowButtons;
