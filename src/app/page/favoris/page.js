import React from "react";
import Header from "../../components/Header";
import List from "../../components/List";
import fetchSpotifyApi from "../../../api/api";

const ListPage = async () => {
  const response = await fetchSpotifyApi('browse/featured-playlists?limit=10');
  return (
    <>
      <Header />
        <p>Pas commencé</p>
    </>
  );
};

export default ListPage;
