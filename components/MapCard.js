import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function DisplayMapCard({ maps }) {
  return (
    <Card border="light" style={{ width: '18rem', margin: '10px', backgroundColor: '#6eaeee' }}>
      <Card.Img variant="top" src={maps.image_url} alt={maps.name} style={{ height: '300px' }} />
      <h2>{maps.name}</h2>
      <h4>{maps.theme}</h4>
      <h4>{maps.difficulty}</h4>
      <Link passHref href="/selectCup">
        <Button variant="success" className="m-2">Select!</Button>
      </Link>
    </Card>
  );
}

DisplayMapCard.propTypes = {
  maps: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
    theme: PropTypes.string,
    difficulty: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
