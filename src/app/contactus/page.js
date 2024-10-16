import React from "react";
import styles from "./contactus.module.css";
import ContactForm from "../components/contactform/ContactForm";
import heroImage from "../../../public/contactpage/1.png";
import PageHero from "../components/pageheroes/PageHero";
import Container7 from "../components/container7/Container7";
const ContactPage = () => {
  return (
    <div>
      <PageHero
        img={heroImage}
        title="Contact Us"
        subTitle="Home / Contact Us"
      />
      <div className={styles.margin}>
        <ContactForm contactPage={true} />
      </div>
      <Container7 />
    </div>
  );
};

export default ContactPage;
