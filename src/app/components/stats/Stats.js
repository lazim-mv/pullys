import React from "react";
import styles from "./stats.module.css";

const statData = [
  {
    number: "1000+",
    text: "Happy Customers",
  },
  {
    number: "10+",
    text: "Industry",
  },
  {
    number: "45+",
    text: "Years Of Experience",
  },
  {
    number: "4+",
    text: "Countries (India, Saudi Arabia, Bahrain, Morocco)",
  },
];

const Stats = () => {
  return (
    <div className={styles.container}>
      <h2>Expand your horizons with us.</h2>
      <div className={styles.cards}>
        {statData.map((item, index) => (
          <div className={styles.card} key={index}>
            <h1 className={styles.number}>{item.number}</h1>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
