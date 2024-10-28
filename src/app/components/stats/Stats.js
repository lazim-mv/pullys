"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./stats.module.css";

const statData = [
  {
    number: 1000,
    text: "Happy Customers",
  },
  {
    number: 10,
    text: "Industry",
  },
  {
    number: 45,
    text: "Years Of Experience",
  },
  {
    number: 5,
    text: "Countries (India, Saudi Arabia, Bahrain, Morocco,UAE)",
  },
];

const Stats = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);
  const [counts, setCounts] = useState(statData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const duration = 1500;
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);

        setCounts(statData.map((data) => Math.floor(progress * data.number)));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView]);

  return (
    <div className={styles.container} ref={containerRef}>
      <h2>Expand your horizons with us.</h2>
      <div className={styles.cards}>
        {statData.map((item, index) => (
          <div className={styles.card} key={index}>
            <h1 className={styles.number}>{counts[index]}+</h1>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
