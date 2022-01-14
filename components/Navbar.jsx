import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import styles from "../styles/Navbar.module.scss";
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callbutton}>
            <Image
              src="/img/telephone.png"
              alt=""
              height="2em"
              width="2em"
              layout="responsive"
            />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>7665212079</div>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listitem}>
              <Link href="/" passHref={true}>Home</Link>
            </li>
            <li className={styles.listitem}>Product</li>
            <li className={styles.listitem}>Menu</li>

            <Image
              src="/img/logo.png"
              height="55px"
              width="160px"
              alt=""
              className={styles.logo}
              // layout="responsive"
            />
            <li className={styles.listitem}>Events</li>
            <li className={styles.listitem}>Blog</li>
            <li className={styles.listitem}>Contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          <Link href="/cart" passHref={true}>
            <div className={styles.cart}>
              <Image src="/img/cart.png" width="30px" height="30px" alt="" />
              <div className={styles.counter}>2</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
