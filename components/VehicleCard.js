import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

function VehicleCard({ vehicleObj }) {
  console.warn('vehicle card');

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={vehicleObj.image_url} alt={vehicleObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{vehicleObj.name}</Card.Title>
        <Link passHref href="/maps">
          <Button variant="danger" className="m-2">SELECT</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

VehicleCard.propTypes = {
  vehicleObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default VehicleCard;
