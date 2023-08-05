import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function VehicleCard({ vehicleObj }) {
  console.warn('vehicle card');

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={vehicleObj.image_url} alt={vehicleObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{vehicleObj.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

VehicleCard.propTypes = {
  vehicleObj: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default VehicleCard;
