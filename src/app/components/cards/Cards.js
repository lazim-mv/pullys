import React from "react";
import styles from "./cards.module.css";
import Image from "next/image";
import icon1 from "../../../../public/aboutPage/aboutCard/1.svg";
import icon2 from "../../../../public/aboutPage/aboutCard/2.svg";
import icon3 from "../../../../public/aboutPage/aboutCard/3.svg";
import icon4 from "../../../../public/aboutPage/aboutCard/4.svg";

const cardData = [
  {
    icon: icon1,
    cardHeading: "Expertise Across Industries",
    desc: "With over 45 years of experience, we deliver tailored solutions that meet the unique needs of various sectors.",
  },
  {
    icon: icon2,
    cardHeading: "Commitment to Quality",
    desc: "Our rigorous quality control ensures that every product and service meets the highest standards, guaranteeing customer satisfaction.",
  },
  {
    icon: icon3,
    cardHeading: "Customer-Centric Approach",
    desc: "We prioritize your needs, providing personalized support and responsive service to foster lasting partnerships",
  },
  {
    icon: icon4,
    cardHeading: "Innovative Solutions",
    desc: "We leverage the latest industry trends and technologies to offer innovative products and services that drive your business forward.",
  },
];

const Card = ({ icon, cardHeading, desc }) => {
  return (
    <div className={styles.card}>
      <Image src={icon} alt="icon" width={70} height={70} />
      <h3 className={styles.cardHeading}>{cardHeading}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {cardData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            cardHeading={item.cardHeading}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
