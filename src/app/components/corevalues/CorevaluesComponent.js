import React from "react";
import styles from "./corevaluescomponent.module.css";
import dataSource from "./data";
import Image from "next/image";

const Card = ({ img, title, description }) => {
  return (
    <div className={styles.card}>
      <Image src={img} alt={title} width={50} height={50} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const CorevaluesComponent = () => {
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
    </div>
  );
};

export default CorevaluesComponent;
