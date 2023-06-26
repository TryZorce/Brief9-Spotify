import React from "react";
import Header from "../../components/Header.jsx";
import List from "../../components/List.jsx";
import data from "../../components/data.json";

function ListUser() {
  const filteredPeople = Object.values(data.people).filter(objet => objet.post === "technician");

  return (
    <>
      <Header />
      {filteredPeople.map(objet => (
        <List
          name={objet.name}
          age={objet.age}
          address={objet.address.street + " " + objet.address.city + " " + objet.address.country}
          post={objet.post}
        />
      ))}
    </>
  );
}

export default ListUser;

