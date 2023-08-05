/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import CharacterCard from '../components/CharacterCard';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  // need to create get characters api call //

  const getAllCharacters = () => {
    // eslint-disable-next-line no-undef
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
