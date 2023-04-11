import React, { useState, useEffect } from "react";
import axios from "axios";
import "./api.css";

function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?count=100")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="api">
      <div className="title">
        <h1>Rick and Morty</h1>
      </div>
      <div className="char-container">
        {Data?.map((character) => (
          <div key={character.id}>
            <div className="charBox">
              <img src={character.image} alt="" />
              <p>Name: {character.name}</p>
              <p>Gender: {character.gender}</p>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
