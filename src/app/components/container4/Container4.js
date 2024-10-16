import React from "react";
import styles from "./container4.module.css";
import dataSource from "./data";
import Image from "next/image";
import { BtnComponent } from "../common/ButtonComponent";

const Card = ({ img, title, description }) => {
  return (
    <div className={styles.card}>
      <Image src={img} alt={title} width={384} height={300} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Container4 = () => {
  const data = dataSource.cardData;
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{dataSource.heading}</h2>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.cardHeading}
            description={item.description}
          />
        ))}
      </div>
      <a href="/ourbusiness">
        <BtnComponent buttonText="View More" bg="#002D4C" />
      </a>
    </div>
  );
};

export default Container4;
