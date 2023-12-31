import React from "react";
import Header from "../../components/Header";
import List from "../../components/List.jsx";
import style from "./page.module.scss";
import fetchSpotifyApi from "../../../api/api";

const ListPage = async () => {
  const response = await fetchSpotifyApi('browse/featured-playlists?limit=20');
  return (
    <>
      <Header />
      <h1 className={style.title}>Playlist</h1>
      <div className={style.wrapper}>
        {response?.playlists.items.map((music, index) => (
          <List
          key={index}
          id={music.id}
          title={music.name}
          artist={music.tracks.total + " " + "Titres"}
          image={music.images[0].url}
        />
        ))}
      </div>
    </>
  );
};

export default ListPage;
