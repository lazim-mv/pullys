import React from "react";
import styles from "./footer.module.css";
import logo from "../../../../public/logo.svg";
import ig from "../../../../public/socials/ig.svg";
import linkedin from "../../../../public/socials/in.svg";
import thread from "../../../../public/socials/thread.svg";
import fb from "../../../../public/socials/fb.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.firstColomn}>
          <Image src={logo} alt="logo" />
          <p>
            Delivering trusted, innovative solutions in trading, industrial
            services, and manufacturing to meet your needs since 1978.
          </p>
        </div>
        <div className={styles.secondColomn}>
          <h3 className={styles.title}>Quick Links</h3>
          <div className={styles.links}>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/ourbusiness">Business</a>
            <a href="/contactus">Contact Us</a>
          </div>
        </div>
        <div className={styles.thirdColomn}>
          <h3 className={styles.title}>Contact Us</h3>
          <div className={styles.address}>
            <a href="tel:+966555235143">+966 55 523 5143</a>
            <a href="mailto:info@pullysons.com">info@pullysons.com</a>
          </div>
        </div>
        <div className={styles.fourthColomn}>
          <h3>Socials</h3>
          <div className={styles.socials}>
            <div className={styles.circle}>
              <Image src={ig} alt="ig" />
            </div>
            <div className={styles.circle}>
              <Image src={linkedin} alt="ig" />
            </div>
            <div className={styles.circle}>
              <Image src={thread} alt="ig" />
            </div>
            <div className={styles.circle}>
              <Image src={fb} alt="ig" />
            </div>
          </div>
        </div>
      </div>
      <a href="https://www.procube.cx/">
        <p className={styles.copyRight}>
          © 2024 All Right Reserved | Powered by procube.cx
        </p>
      </a>
    </div>
  );
};

export default Footer;
