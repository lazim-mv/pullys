import React from "react";
import styles from "./aboutpage.module.css";
import Hero from "../components/hero/Hero";
import PageHero from "../components/pageheroes/PageHero";
import heroImage from "../../../public/aboutPage/pageHero/1.png";
import mobileHeroImage from "../../../public/aboutPage/pageHero/m1.png";
import AboutComponent from "../components/about/AboutComponent";
import image1 from "../../../public/aboutPage/1.png";
import image2 from "../../../public/aboutPage/2.png";
import Stats from "../components/stats/Stats";
import Container5 from "../components/container5/Container5";
import Cards from "../components/cards/Cards";
import Container7 from "../components/container7/Container7";
import ContactForm from "../components/contactform/ContactForm";
import { headers } from "next/headers";

const AboutPage = () => {
  const header = headers();
  const viewport = header.get("x-viewport");
  const host = header.get("hostname");
  console.log(host, "Hostname");

  const isMobile = viewport === "mobile" ? true : false;
  return (
    <div>
      <PageHero
        img={isMobile ? mobileHeroImage : heroImage}
        title="About Us"
        subTitle="Home / About Us"
        host={host}
      />
      <AboutComponent
        img={image1}
        title="About Us"
        desc="Welcome to Pullys Group! Since 1978, we've been a leader in trading spices, F&B, fabrics, and industrial materials, while offering top-notch MEP, HVAC, and mechanical services. Our manufacturing division creates premium pet accessories and food. Serving India, Saudi Arabia, Bahrain, and Morocco, we deliver innovation, trust, and excellence to 1000+ happy customers."
        key={3}
      />
      <Stats />
      <Container5
        title="A Legacy for Excellence since 1978"
        desc="Since 1978, we have built a legacy of excellence across diverse industries. Our commitment to quality, innovation, and customer satisfaction has established us as a trusted leader in trading, industrial services, and manufacturing. With over 45 years of experience, we continue to set high standards, ensuring that every product and service reflects our dedication to excellence and reliability."
        img={image2}
        key={4}
        page="about"
      />
      <Cards />
      <Container7 />
      <ContactForm />
    </div>
  );
};

export default AboutPage;
