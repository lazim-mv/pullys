"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./mobileHeader.module.css";
import { BtnComponent } from "../common/ButtonComponent";
import logo from "../../../../public/mlogo.svg";
import Link from "next/link";

function MobileHeader() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Our Business", href: "/ourbusiness" },
  ];

  return (
    <div
      className={styles.mHeader}
      style={{
        backgroundColor: isMenuOpen ? "rgba(0, 0, 0, 0.4)" : "transparent",
        height: "16vw",
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
              width={104}
              height={24}
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
            top: "16vw",
            right: 0,
            width: "100vw",
            height: isMenuOpen ? "auto" : "0vh",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 52,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px",
            // boxShadow: "2px white",
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
              <Link
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
                onClick={toggleMenu}
              >
                {item.text}
              </Link>
            ))}

            <Link
              href="/contactus"
              style={{ display: isMenuOpen ? "block" : "none" }}
              onClick={toggleMenu}
            >
              <BtnComponent
                buttonText="Get in Touch"
                header={true}
                bg="rgba(255,255,255,0.2)"
                arrow={true}
                color="#ffffff"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
