import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getSingleRace, updateRace } from '../utils/data/raceData';
// import { useRouter } from 'next/router';
// import { useAuth } from '../utils/context/authContext';

const initialState = {
  characterId: '',
  mapId: '',
  vehicleId: '',
  id: '',
  uid: {},
};

const RaceForm = ({ race }) => {
  // const { user } = useAuth();
  const [currentRace, setCurrentRace] = useState(initialState);
  // const router = useRouter();
  // const raceId = router.query;
  const characters = [
    { id: 1, name: 'Mario' },
    { id: 2, name: 'Toad' },
    { id: 3, name: 'Luigi' },
    { id: 4, name: 'Princess Peach' },
    { id: 5, name: 'Yoshi' },
    { id: 6, name: 'Bowser' },
    { id: 7, name: 'Donkey Kong' },
    { id: 8, name: 'Wario' },
  ];

  const vehicles = [
    { id: 1, name: 'Standard Kart' },
    { id: 2, name: 'Mach 8' },
    { id: 3, name: 'Cat Cruiser' },
    { id: 4, name: 'Blue Falcon' },
    { id: 5, name: 'Biddybuggy' },
    { id: 6, name: 'Flame Rider' },
    { id: 7, name: 'Teddy Buggy' },
    { id: 8, name: 'Sports Coupe' },
  ];

  const maps = [
    { id: 1, name: 'Mushroom City' },
    { id: 2, name: 'Luigi Circuit' },
    { id: 3, name: 'Boo Lake' },
    { id: 4, name: 'Waluigi Stadium' },
    { id: 5, name: 'Snow Land' },
    { id: 6, name: 'Sunshine Airport' },
    { id: 7, name: 'Broken Pier' },
    { id: 8, name: 'Dino Dino Jungle' },
  ];

  useEffect(() => {
    if (race.id) {
      getSingleRace(race.id)
        .then((data) => {
          setCurrentRace(data);
        })
        .catch(console.error);
    }
  }, [race.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentRace((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRace(currentRace.id, currentRace)
      .then(() => {
        // Do something after successful update
      })
      .catch((error) => {
        console.error('Failed to update race:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Character</Form.Label>
        <Form.Select
          name="characterId"
          required
          value={currentRace.characterId}
          onChange={handleChange}
        >
          <option value="">Select a Character</option>
          {characters.map((character) => (
            <option key={character.id} value={character.id}>
              {character.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Vehicle</Form.Label>
        <Form.Select
          name="vehicleId"
          required
          value={currentRace.vehicleId}
          onChange={handleChange}
        >
          <option value="">Select a Vehicle</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Map</Form.Label>
        <Form.Select
          name="mapId"
          required
          value={currentRace.mapId}
          onChange={handleChange}
        >
          <option value="">Select a Map</option>
          {maps.map((map) => (
            <option key={map.id} value={map.id}>
              {map.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* ... rest of your form fields ... */}

      <Button type="submit">Submit</Button>
    </Form>
  );
};

RaceForm.propTypes = {
  race: PropTypes.shape({
    characterId: PropTypes.number,
    mapId: PropTypes.number,
    vehicleId: PropTypes.number,
    id: PropTypes.number,
    // eslint-disable-next-line react/forbid-prop-types
    uid: PropTypes.object,
  }),
};

RaceForm.defaultProps = {
  race: initialState,
};

export default RaceForm;
