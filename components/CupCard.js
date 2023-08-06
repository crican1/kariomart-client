import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CupCard({ cupObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="cup-card">
      <Card.Body>
        <Card.Title>{cupObj.name}</Card.Title>
        {/* need button link for context tracking for select */}
        <Link href="/raceConfirm" passHref>
          <Button className="card-select">SELECT</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

CupCard.propTypes = {
  cupObj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    race_id: PropTypes.number,
  }).isRequired,
};
