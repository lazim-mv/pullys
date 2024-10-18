"use client";
import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { BtnComponent } from "../common/ButtonComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  const getLinkStyle = (path) => {
    return pathName === path
      ? { color: "#fff" }
      : { color: "rgba(255, 255, 255, 0.6)" };
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerItemsContainer}>
          <Link href="/">
            <Image src={logo} alt="company logo" />
          </Link>
          <div className={styles.links}>
            <Link href="/" style={getLinkStyle("/")}>
              Home
            </Link>
            <Link href="/about" style={getLinkStyle("/about")}>
              About Us
            </Link>
            <Link href="/ourbusiness" style={getLinkStyle("/ourbusiness")}>
              Business
            </Link>
          </div>
          <Link href="/contactus">
            <BtnComponent buttonText="Contact Us" bg="rgba(255,255,255,0.2)" />
          </Link>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;
