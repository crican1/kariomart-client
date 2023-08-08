/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function RaceCard({ raceObj }) {
  const { map_id, character_id, vehicle_id } = raceObj;

  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="race-card">
      <Card.Body>
        <Card.Title>{map_id?.name}</Card.Title>
        <Card.Text>Character: {character_id?.name}</Card.Text>
        <Card.Text>Vehicle: {vehicle_id?.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

RaceCard.propTypes = {
  raceObj: PropTypes.shape({
    map_id: PropTypes.shape({
      name: PropTypes.string,
    }),
    character_id: PropTypes.shape({
      name: PropTypes.string,
    }),
    vehicle_id: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};
