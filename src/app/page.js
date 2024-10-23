import Image from "next/image";
import UnderMaintainance from "./components/undermaintainance/UnderMaintainance";
import Hero from "./components/hero/Hero";
import AboutComponent from "./components/about/AboutComponent";
import CorevaluesComponent from "./components/corevalues/CorevaluesComponent";
import Container4 from "./components/container4/Container4";
import Container5 from "./components/container5/Container5";
import Container6 from "./components/container6/Container6";
import Container7 from "./components/container7/Container7";
import ContactForm from "./components/contactform/ContactForm";
import image from "../../public/common/about.png";
import image1 from "../../public/common/container5.png";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutComponent
        buttonText="View More"
        title="About Us"
        desc="Welcome to Pullys Group! Since 1978, we've been a leader in trading
          spices, F&B, fabrics, and industrial materials, while offering
          top-notch MEP, HVAC, and mechanical services. Our manufacturing
          division creates premium pet accessories and food. Serving India,
          Saudi Arabia, Bahrain, and Morocco, we deliver innovation, trust, and
          excellence to 1000+ happy customers."
        img={image}
        key={1}
        href="/about"
      />
      <CorevaluesComponent />
      <Container4 />
      <Container5
        img={image1}
        title="How We Started"
        desc="Pullys Group began in 1978 as a spice trading company in a small town called Malappuram, Kerala. Founded on the principles of quality and trust, we recognized opportunities in the market and expanded into food and beverages, fabrics, and industrial materials. Today, we are a diversified enterprise, proudly serving customers across multiple countries while remaining committed to excellence and reliability."
        buttonText="View More"
        key={2}
        href="/about"
      />
      <Container6 />
      <Container7 />
      <ContactForm />
    </main>
  );
}
