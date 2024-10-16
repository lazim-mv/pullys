import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { BtnComponent } from "../common/ButtonComponent";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerItemsContainer}>
          <Link href="/">
            <Image src={logo} alt="company logo" />
          </Link>
          <div className={styles.links}>
            <Link href="/" className={styles.link1}>
              Home
            </Link>
            <Link href="/about" className={styles.link2}>
              About Us
            </Link>
            <Link href="/ourbusiness" className={styles.link3}>
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
