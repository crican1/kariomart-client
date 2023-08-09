import { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import RaceCard from '../components/RaceCard';
import { getRaces } from '../utils/data/raceData';

function Home() {
  const { user } = useAuth();
  const [races, setRaces] = useState([]);
  const [search, setSearch] = useState('');
  console.warn(search);

  useEffect(() => {
    getRaces().then((data) => {
      console.warn(data);
      setRaces(data);
    });
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.fbUser.displayName}! </h1>
      <h2>Races:</h2>
      <Form>
        <InputGroup className="my-3" style={{ width: '18rem', margin: '10px' }}>
          <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search Races" />
        </InputGroup>
      </Form>
      <div>
        {races.filter((race) => (search.toLowerCase() === '' ? race : race.map_id.name.toLowerCase().includes(search))).map((race) => (
          <RaceCard key={race.id} raceObj={race} />
        ))}
      </div>
      <Button href="/character" style={{ width: '18rem', margin: '10px' }}>
        Create New Race
      </Button>
    </div>
  );
}

export default Home;
