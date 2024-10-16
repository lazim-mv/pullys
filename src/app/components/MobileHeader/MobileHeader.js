"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./mobileHeader.module.css";
import { BtnComponent } from "../common/ButtonComponent";
import logo from "../../../../public/logo.svg";

function MobileHeader() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/pages/About/" },
    { text: "Our Works", href: "#ourwork" },
    { text: "Services", href: "/pages/Services/" },
    { text: "Blog", href: "/pages/HeaderBlog/" },
    { text: "Contact Us", href: "/pages/Contact/" },
  ];

  return (
    <div
      className={styles.mHeader}
      style={{
        backgroundColor: "transparent",
        height: "21.333333333333336vw",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <div
        className={`mHeaderContainer ${styles.mHeaderContainer}`}
        style={{
          width: "100%",
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          borderBottom: "0.26666666666666666vw solid rgba(255,255,255,0.6)",
        }}
      >
        <a href="/">
          <div>
            <Image
              src={logo}
              width={120}
              height={30}
              alt="ImageHeader"
              className={styles.logo}
            />
          </div>
        </a>
        <div
          aria-label="HamburgerMenu"
          onClick={toggleMenu}
          className={`${styles.bars} ${isMenuOpen ? styles.open : ""}`}
          style={{ position: "relative", display: "flex", border: "none" }}
        >
          <span className={`bar ${styles.bar}`}></span>
          <span className={`bar ${styles.bar}`}></span>
          <span className={`bar ${styles.bar}`}></span>
        </div>
        <div
          style={{
            position: "absolute",
            top: "21.333333333333336vw",
            right: 0,
            width: "100vw",
            height: isMenuOpen ? "auto" : "0vh",
            backgroundColor: "#12171c",
            zIndex: 52,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px",
            gap: "10px",
            opacity: isMenuOpen ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <div
            className={`hMenu ${styles.hMenu}`}
            style={{
              height: isMenuOpen ? "auto" : 0,
              transform: isMenuOpen ? "translateY(0)" : "translateY(-4.8vw)",
              transition: "transform 0.4s ease, height 0.1s ease",
            }}
          >
            {menuList.map((item, index) => (
              <a
                key={index}
                className={`linksWrapper linksText ${
                  pathname !== undefined &&
                  pathname !== null &&
                  pathname !== "" &&
                  pathname === item.href
                    ? "active"
                    : ""
                } ${styles.linksWrapper} ${styles.linksText}`}
                href={item.href}
                style={{
                  transform: isMenuOpen
                    ? "translateY(0)"
                    : "translateY(-100vw)",
                }}
              >
                {item.text}
              </a>
            ))}

            <a href="/" style={{ display: isMenuOpen ? "block" : "none" }}>
              <BtnComponent
                buttonText="Get in Touch"
                header={true}
                bg="rgba(255,255,255,0.2)"
                arrow={true}
                color="#ffffff"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
