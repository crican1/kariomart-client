/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router';
import { deleteRace } from '../utils/data/raceData';

const RaceCard = ({
  id,
  mapId,
  characterId,
  vehicleId,
  onUpdate,
}) => {
  const router = useRouter();

  const deleteThisRace = () => {
    if (window.confirm('Delete this race?')) {
      deleteRace(id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="race-card">
      <Card.Body>
        <Card.Title>{mapId?.name}</Card.Title>
        <Card.Text>Character: {characterId?.name}</Card.Text>
        <Card.Text>Vehicle: {vehicleId?.name}</Card.Text>
      </Card.Body>
      <Button onClick={() => {
        router.push('/character');
      }}
      >Edit
      </Button>
      <Button onClick={deleteThisRace}>Delete</Button>
    </Card>
  );
};

RaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  mapId: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  characterId: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  vehicleId: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default RaceCard;
