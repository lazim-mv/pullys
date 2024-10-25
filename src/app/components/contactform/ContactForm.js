import React from "react";
import styles from "./contactform.module.css";
import { BtnComponent } from "../common/ButtonComponent";
import phone from "../../../../public/contactpage/phone.svg";
import mail from "../../../../public/contactpage/mail.svg";
import pin from "../../../../public/contactpage/pin.svg";
import Image from "next/image";

const ContactForm = ({ contactPage }) => {
  return (
    <div className={styles.container}>
      <h2>Get In Touch</h2>
      <form className={styles.form}>
        <div className={`${styles.row} ${styles.twoFields}`}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <div className={`${styles.row} ${styles.twoFields}`}>
          <input type="number" placeholder="Phone Number" />
          <input type="text" placeholder="Location" />
        </div>
        <div className={styles.row}>
          <input type="text" placeholder="Subject" />
        </div>
        <div className={styles.row}>
          <textarea type="text" placeholder="Your Message" />
        </div>
        <div className={`${styles.row} ${styles.button}`}>
          <BtnComponent
            buttonText="Send Message"
            bg="#002D4C"
            margin={"0 0 0 auto"}
          />
        </div>
      </form>
      {contactPage && (
        <div className={styles.bottomContainer}>
          <h3>Say Hello</h3>
          <div className={styles.cards}>
            <a href="tel:+966555235143">
              <div className={`${styles.card} ${styles.card1}`}>
                <div className={styles.iconContainer}>
                  <Image src={phone} alt="phone" width={28} height={28} />
                </div>
                <p>+966 55 523 5143,</p>
                <p>+971 54 772 7245</p>
              </div>
            </a>
            <a href="mailto:info@pullysons.com">
              <div className={`${styles.card} ${styles.card2}`}>
                <div className={styles.iconContainer}>
                  <Image src={mail} alt="phone" width={28} height={28} />
                </div>
                <p>info@pullysons.com</p>
              </div>
            </a>
            <div className={`${styles.card} ${styles.card3}`}>
              <div className={styles.iconContainer}>
                <Image src={pin} alt="phone" width={28} height={28} />
              </div>
              <p className={styles.location}>
                Office 10 , One Stop Business Center, 3rd Floor, Office Tower,
                Al Ghurrair Center, UAE
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
