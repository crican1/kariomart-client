import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RaceContext } from '../utils/context/raceContext';

export default function CharacterCard({ characterObj }) {
  const { setSelectedCharacter, addToRace } = useContext(RaceContext);

  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="team-card">
      <Card.Img variant="top" src={characterObj.image_url} alt={characterObj.name} style={{ height: '8em' }} className="charac-img" />
      <Card.Body>
        <Card.Title>{characterObj.name}</Card.Title>
        <Link passHref href="/vehicles">
          <Button
            className="card-select"
          // href="/vehicles"
            onClick={() => {
              setSelectedCharacter(characterObj.id);
              addToRace({ characterId: characterObj.id });
            }}
          >SELECT
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

CharacterCard.propTypes = {
  characterObj: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
