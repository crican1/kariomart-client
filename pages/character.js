/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import CharacterCard from '../components/CharacterCard';
import { getCharacters } from '../utils/data/characterData';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const getAllCharacters = () => {
    getCharacters().then(setCharacters);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <div className="text-center my-4">
      <h1>SELECT YOUR CHARACTER</h1>
      <div className="d-flex flex-wrap">
        {characters.map((character) => (
          <CharacterCard key={character.id} characterObj={character} />
        ))}
      </div>
    </div>
  );
}
