"use client"
import React from "react";
import styles from "./list.module.scss";


const List = ({ id, title, artist, album, image }) => {
  return (
    <div className={styles.wrapper_card}>
      <a href={`/page/details/${id}`}>
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.wrapper_text}>
          <p className={styles.title}>{title}</p>
          <p className={styles.artist}>{artist}</p>
          <p className={styles.album}>{album}</p>
        </div>
      </a>
    </div>
  );
};

export default List;