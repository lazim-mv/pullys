"use client";
import React, { useState } from "react";
import styles from "./container7.module.css";
import plusOrCross from "../../../../public/common/plus.svg";
import Image from "next/image";
import { BtnComponent } from "../common/ButtonComponent";
import Link from "next/link";

const cardsData = [
  {
    question: "1.   What industries does Pullys Group operate in?",
    answer:
      "Pulleys Group operates in various industries, including trading (spices, food and beverages, confectioneries, fabrics, and industrial materials), industrial services (MEP, HVAC, mechanical construction), and manufacturing (pet accessories and pet food).",
  },
  {
    question: "Do you provide custom solutions for industrial services?",
    answer:
      "Yes, we offer tailored industrial service solutions in MEP, HVAC, and mechanical construction to meet the specific needs of our clients.",
  },
  {
    question: "How can businesses request a bulk order or a custom quote?",
    answer:
      "Businesses can request a bulk order or custom quote by contacting our sales team directly through the website or by phone, providing details of their specific requirements.",
  },
  {
    question:
      "What measures do you have in place to guarantee product quality and safety?",
    answer:
      "We implement strict quality control measures, including supplier assessments and regular testing, to ensure all products meet industry standards for safety and quality.",
  },
  {
    question: "How can I access customer support for service inquiries?",
    answer:
      "Customer support can be accessed through our website's contact form or by calling our dedicated support line, where our team is ready to assist with any service inquiries.",
  },
];

const Container7 = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.cards}>
        {cardsData.map((data, index) => (
          <div
            className={styles.card}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <div className={styles.question}>
              <h3>{index + 1}.</h3>
              <h3 className={styles.questionText}>
                {data.question}
                <Image
                  src={plusOrCross}
                  alt="plus or cross"
                  className={styles.plusOrCross}
                  style={{
                    transform: expandedIndex === index ? "rotate(45deg)" : "",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </h3>
            </div>
            {expandedIndex === index && (
              <div className={styles.answer}>
                <p>{data.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Link href="/contactus">
        <BtnComponent buttonText="Contact Us" bg="#002D4C" />
      </Link>
    </div>
  );
};

export default Container7;
