'use client'
import React from "react";
import Header from "./components/Header";
import List from "./components/List.jsx";
import data from "./components/data.json";
import style from "./page.module.scss";

function ListUser() {
  const filteredPeople = Object.values(data.people).filter(objet => objet.post === "technician");

  return (
    <>
      <Header />
      <h1 className={style.title}>Accueil</h1>
      {filteredPeople.map(objet => (
        <List
        />
      ))}
    </>
  );
}

export default ListUser;

