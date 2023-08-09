/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router';
import { deleteRace } from '../utils/data/raceData';

const RaceCard = ({
  id,
  map_id,
  character_id,
  vehicle_id,
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
        <Card.Title>{map_id?.name}</Card.Title>
        <Card.Text>Character: {character_id?.name}</Card.Text>
        <Card.Text>Vehicle: {vehicle_id?.name}</Card.Text>
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
  map_id: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  character_id: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  vehicle_id: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default RaceCard;
