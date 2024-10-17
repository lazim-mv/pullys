import React from "react";
import styles from "./contactus.module.css";
import ContactForm from "../components/contactform/ContactForm";
import heroImage from "../../../public/contactpage/1.png";
import mobileHeroImage from "../../../public/contactpage/m3.png";
import PageHero from "../components/pageheroes/PageHero";
import Container7 from "../components/container7/Container7";
import { headers } from "next/headers";
const ContactPage = () => {
  const header = headers();
  const viewport = header.get("x-viewport");
  const isMobile = viewport === "mobile";
  return (
    <div>
      <PageHero
        img={isMobile ? mobileHeroImage : heroImage}
        title="Contact Us"
        subTitle="Home / Contact Us"
        marginBottom="0"
        imgWidth={isMobile ? 375 : 1512}
        imgHeight={isMobile ? 300 : 500}
      />
      <div className={styles.margin}>
        <ContactForm contactPage={true} />
      </div>
      <Container7 />
    </div>
  );
};

export default ContactPage;
