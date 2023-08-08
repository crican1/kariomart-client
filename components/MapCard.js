import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
import { RaceContext } from '../utils/context/raceContext';

export default function DisplayMapCard({ mapObj }) {
  const { setSelectedMap, addToRace } = useContext(RaceContext);
  return (
    <Card border="light" style={{ width: '18rem', margin: '10px', backgroundColor: '#6eaeee' }}>
      <Card.Img variant="top" src={mapObj.image_url} alt={mapObj.name} style={{ height: '300px' }} />
      <h2>{mapObj.name}</h2>
      <h4>{mapObj.theme}</h4>
      <h4>{mapObj.difficulty}</h4>
      <Link passHref href="/selectCups">
        <Button
          variant="success"
          className="m-2"
          onClick={() => {
            setSelectedMap(mapObj.id);
            addToRace({ map_id: mapObj.id });
          }}
        >Select!
        </Button>
      </Link>
    </Card>
  );
}

DisplayMapCard.propTypes = {
  mapObj: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
    theme: PropTypes.string,
    difficulty: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
