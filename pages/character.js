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
    <div>
      <div className="characters">
        {characters.map((character) => (
          <CharacterCard key={character.id} characterObj={character} />
        ))}
      </div>
    </div>
  );
}
