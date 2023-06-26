import React from "react";
import Header from "../../components/Header.jsx";
import Detail from "../../components/Detail.jsx"
import data from "../../components/data.json";

function ListUser() {
  const filteredPeople = Object.values(data.people).filter(objet => objet.post === "technician");

  return (
    <>
      <Header />
     <h1>Détails</h1>


    </>
  );
}

export default ListUser;

