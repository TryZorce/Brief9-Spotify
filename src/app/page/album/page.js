import React from "react";
import Header from "../../components/Header";
import List from "../../components/List.jsx";
import style from "./page.module.scss";
import fetchSpotifyApi from "../../../api/api";

const ListPage = async () => {
  const response = await fetchSpotifyApi('browse/new-releases');
  console.log(response);
  return (
    <>
      <Header />
      <h1 className={style.title}>Album Récent</h1>
      <div className={style.wrapper}>
        {response?.albums.items.map((album, index) => (
          <List
            key={index}
            id={album.id}
            title={album.name}
            artist={album.artists[0].name}
            image={album.images[0].url}
          />
        ))}
      </div>
    </>
  );
};

export default ListPage;
