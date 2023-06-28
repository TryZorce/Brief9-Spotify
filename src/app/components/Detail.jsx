"use client"
import React from "react";
import styles from "./list.module.scss";

const Detail = ({name, artist, album, image}) => {
  return (
    <div className={styles.wrapper_card}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.wrapper_text}>
          <p className={styles.name}>{name}</p>
          <p className={styles.artist}>{artist}</p>
          <p className={styles.album}>{album}</p>
        </div>
    </div>
  );
};

export default Detail;