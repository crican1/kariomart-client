/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import {
  Button, Card,
} from 'react-bootstrap';

const CupCard = ({
  id,
  name,
  imageUrl,
}) => {
  const router = useRouter();
  console.warn(imageUrl);

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }} className="cup-card">
        <Card.Title> {name}</Card.Title>
        <img src={imageUrl} alt={name} style={{ height: '8em' }} className="charac-img" />
        <Button
          style={{ margin: '10px' }}
          variant="secondary"
          onClick={() => {
            router.push(`/cups/${id}`);
          }}
        >
          View Cup
        </Button>
      </Card>
    </>
  );
};

CupCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CupCard;
