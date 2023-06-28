'use client'
import React from "react";
import Header from "../../../components/Header";
import fetchSpotifyApi from "../../../../api/api";
import Detail from "../../../components/Detail"

const ListPage = ({ params }) => {
  const { id } = params;
  console.log(params);

  const spotifyUrl = `https://api.spotify.com/v1/playlists/${id}`;
console.log(spotifyUrl);
  return (
    <>
      <Header />
      <div>
        <Detail 
        
        />
      </div>
    </>
  );
};

export default ListPage;
