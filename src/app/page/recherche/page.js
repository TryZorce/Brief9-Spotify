'use client'
import React from "react";
import Header from "../../components/Header";
import fetchSpotifyApi from "../../../api/api";
import { useSearchParams } from 'next/navigation'

const ListPage = async () => {
  const response = await fetchSpotifyApi('browse/featured-playlists?limit=10');
  return (
    <>
      <Header/>
    </>
  );
};

export default ListPage;
