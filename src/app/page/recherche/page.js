import React from "react";
import Header from "../../components/Header";
import List from "../../components/List";
import fetchSpotifyApi from "../../../api/api";

const ListPage = async () => {
  const response = await fetchSpotifyApi('browse/featured-playlists?limit=10');
  return (
    <>
      <Header />
    </>
  );
};

export default ListPage;
