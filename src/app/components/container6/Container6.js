"use client";
import ArrowButtons from "../common/ArrowButton/ArrowButtons";
import styles from "./container6.module.css";

import React, { useState } from "react";
import { useViewport } from "@/app/context/ViewportContext";

const cardsData = [
  {
    name: "Aysha Raheem",
    description:
      "“I am extremely impressed by Pulleys Group’s quality products. Their pet food has made a noticeable difference in my pet’s health and happiness!”",
  },
  {
    name: "Robin S",
    description:
      "“ Pulleys Group offers reliable services and top-notch products. We have partnered with Pulleys Group for several years and we would highly recommend them!”",
  },
  {
    name: "Alicia James",
    description:
      "“ Pulleys Group offers the best fabrics at the most reasonable prices. We had sourced high-quality fabrics for our production line. Always a pleasure to work with!”",
  },
  {
    name: "Karen Smith",
    description:
      "“ The pet accessories from Pulleys Group are stylish and durable. My customers love them. So do I!”",
  },
];

const Container6 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const viewport = useViewport();
  const isMobile = viewport === "mobile";
  const cardData = cardsData;

  const totalData = cardData.length;
  const clicks = isMobile ? totalData - 1 : totalData - 3;
  const dynamicValue = isMobile ? 70 : 27;

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      // console.log("clicked1");
      // console.log(currentIndex);
    } else {
      setCurrentIndex(0);
      // console.log("clicked2");
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks);
    }
  };

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hear from our clients</h2>
      <div className={styles.cards}>
        {cardsData.map((data, index) => (
          <div
            className={styles.card}
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              transform: `translateX(-${currentIndex * dynamicValue}vw)`,
              transition: `transform 0.8s ease, ${
                !isMobile ? "width" : "height"
              } 0.8s ease`,
            }}
          >
            <p className={styles.description}>{data.description} </p>
            <div className={styles.profile}>
              <div className={styles.square}>
                <h3>{data.name.charAt(0)}</h3>
              </div>
              <div className={styles.nameAndCompany}>
                <p>{data.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!isMobile && (
        <ArrowButtons prevImage={prevImage} nextImage={nextImage} />
      )}
      {isMobile && <ArrowButtons prevImage={prevImage} nextImage={nextImage} />}
    </div>
  );
};

export default Container6;
