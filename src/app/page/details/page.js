import React from "react";
import Header from "../../components/Header";
import List from "../../components/List";
import fetchSpotifyApi from "../../../api/api";

const ListPage = async () => {
  const response = await fetchSpotifyApi('browse/featured-playlists?limit=10');
  return (
    <>
      <Header />
        {/* {response?.playlists.items.map((music, index) => (
          <List
            key={index}
            title={music.name}
            artist={music.owner.display_name}
            image={music.images[0].url}
            album="Album test"
          />
        ))} */}
    </>
  );
};

export default ListPage;
