import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/PizzaCard.module.scss";
const PizzaCard = () => {
  return (
    <Link href="product/45684" passHref={true}>
      <div className={styles.container}>
        <Image src="/img/pizza.png" height="500" alt="" width="500" />
        <h1 className={styles.title}>FIORI DE ZUCCA </h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          et.
        </p>
      </div>
    </Link>
  );
};

export default PizzaCard;
