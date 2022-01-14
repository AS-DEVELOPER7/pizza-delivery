import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/featured.module.scss";
const Featured = () => {
  const images = ["/img/pizza1.jpg", "/img/pizza2.jpg", "/img/pizza3.jpg"];
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowcontainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" height="100%" width="100%" layout="fill" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowcontainer}
        style={{ right: 0 }}
        onClick={() => {
          handleArrow("r");
        }}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
