/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import CharacterCard from '../components/CharacterCard';
import { getCharacters } from '../utils/data/characterData';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  console.warn(search);

  const getAllCharacters = () => {
    getCharacters().then(setCharacters);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <div className="text-center my-4">
      <h1>SELECT YOUR CHARACTER</h1>
      <Form>
        <InputGroup className="my-3" style={{ width: '18rem', margin: '10px' }}>
          <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search Characters" />
        </InputGroup>
      </Form>
      <div className="d-flex flex-wrap">
        {characters.filter((character) => (search.toLowerCase() === '' ? character : character.name.toLowerCase().includes(search))).map((character) => (
          <CharacterCard key={character.id} characterObj={character} />
        ))}
      </div>
    </div>
  );
}
