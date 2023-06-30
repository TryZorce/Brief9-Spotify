'use client'
import React from "react";
import Header from "../../../components/Header";
import fetchSpotifyApi from "../../../../api/api";
import Detail from "../../../components/Detail"

const ListPage = async () => {

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
