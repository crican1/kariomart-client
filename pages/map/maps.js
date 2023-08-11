import React, { useContext, useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DisplayMapCard from '../../components/MapCard';
import { getMaps } from '../../utils/data/mapData';
import { createRace } from '../../utils/data/raceData';
import { RaceContext } from '../../utils/context/raceContext';

export default function MapHome() {
  const { race } = useContext(RaceContext);
  const [maps, setMaps] = useState([]);
  const [search, setSearch] = useState('');
  console.warn(search);

  const router = useRouter();

  const getAllMaps = () => {
    getMaps().then(setMaps);
  };

  useEffect(() => {
    getAllMaps();
  }, []);

  const handleCreateRace = () => {
    createRace(race)
      .then((response) => {
        // Race created successfully, handle the response if needed
        console.warn('Race created:', response);
        router.push('/');
      })
      .catch((error) => {
        // Handle errors if the race creation fails
        console.error('Error creating race:', error);
      });
  };

  return (
    <div>
      <Form>
        <InputGroup className="my-3" style={{ width: '18rem', margin: '10px' }}>
          <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search Maps" />
        </InputGroup>
      </Form>
      <div className="characters">
        {maps.filter((track) => (search.toLowerCase() === '' ? track : track.name.toLowerCase().includes(search))).map((track) => (
          <DisplayMapCard key={track.id} mapObj={track} />
        ))}
      </div>
      <Link passHref href="/">
        <button type="button" onClick={handleCreateRace}>Create Race</button>
      </Link>
    </div>
  );
}
