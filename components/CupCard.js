/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import {
  Button, Card,
} from 'react-bootstrap';

const CupCard = ({
  id,
  name,
}) => {
  const router = useRouter();

  return (
    <>
      <Card className="text-center">
        <Card.Title> {name}</Card.Title>
        <Button
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
};

export default CupCard;
