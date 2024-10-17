import React from "react";
import PageHero from "../components/pageheroes/PageHero";
import heroImage from "../../../public/businesspage/heroimage.png";
import mobileHeroImage from "../../../public/businesspage/m1hero.png";
import image2 from "../../../public/businesspage/2.png";
import mobileimage2 from "../../../public/businesspage/m2.png";
import image1 from "../../../public/businesspage/1.png";
import mobileimage1 from "../../../public/businesspage/m1.png";
import image3 from "../../../public/businesspage/3.png";
import mobileimage3 from "../../../public/businesspage/m3.png";
import LeftImage from "./leftimage/LeftImage";
import Container6 from "../components/container6/Container6";
import Container7 from "../components/container7/Container7";
import ContactForm from "../components/contactform/ContactForm";
import { headers } from "next/headers";

const list1 = [
  "Spices",
  "Food and Beverages",
  "Confectioneries",
  "Fabrics",
  "Industrial Materials",
];

const list2 = [
  "MEP (Mechanical, Electrical, and Plumbing)",
  "HVAC (Heating, Ventilation, and Air Conditioning)",
  "Mechanical Construction",
];

const list3 = ["Pet Food", "Pet Accessories"];

const OurBusiness = () => {
  const header = headers();
  const viewport = header.get("x-viewport");
  const isMobile = viewport === "mobile" ? true : false;

  return (
    <div>
      <PageHero
        img={isMobile ? mobileHeroImage : heroImage}
        title="Our Business"
        subTitle="Home / Our Business"
      />
      <LeftImage
        title="Trading"
        desc="We specialize in trading a diverse range of high-quality products, ensuring reliable supply and exceptional service across various sectors."
        leftImg={isMobile ? mobileimage2 : image2}
        list={list1}
      />
      <LeftImage
        title="Industrial Services"
        desc="Our industrial services provide tailored solutions that enhance operational efficiency and ensure compliance with industry standards."
        rightImg={isMobile ? mobileimage3 : image3}
        list={list2}
      />
      <LeftImage
        title="Manufacturing"
        desc="We manufacture premium pet accessories and nutritious pet food, prioritizing quality and safety for the well-being of pets"
        leftImg={isMobile ? mobileimage1 : image1}
        list={list3}
      />
      <Container6 />
      <Container7 />
      <ContactForm />
    </div>
  );
};

export default OurBusiness;
