import React from "react";
import Header from "./components/Header";
import List from "./components/List.jsx";
import style from "./page.module.scss";
import fetchSpotifyApi from "../api/api";
import AlbumList from "./components/AlbumList"

const ListPage = async () => {
  const response = await fetchSpotifyApi('browse/featured-playlists?limit=5');
  return (
    <>
      <Header />
      <h2 className={style.title}>Playlist Du Moment</h2>
      <a className={style.lien} href="/page/playlist/">Voir plus</a>
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
      <h2 className={style.title}>Album Récent</h2>
      <a className={style.lien} href="/page/album/">Voir plus</a>
      <div className={style.wrapper}>
        <AlbumList />
      </div>
    </>
  );
};



export default ListPage;
