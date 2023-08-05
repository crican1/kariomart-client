import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CharacterCard({ characterObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="team-card">
      <Card.Img variant="top" src={characterObj.image_url} alt={characterObj.name} style={{ height: '8em' }} className="charac-img" />
      <Card.Body>
        <Card.Title>{characterObj.name}</Card.Title>
        {/* need button link for context tracking for select */}
        <Link href="/vehicles" passHref>
          <Button className="card-select">SELECT</Button>
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
