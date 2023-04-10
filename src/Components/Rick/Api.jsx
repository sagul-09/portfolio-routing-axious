
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>
      {Data?.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt="" />
          <p>Name: {character.name}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      ))}
    </div>
  );
}

export default App;