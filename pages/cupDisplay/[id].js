import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCup } from '../../utils/data/cupData';

const CongratulationsPage = () => {
  const router = useRouter();
  const { race } = router.query;
  const [cup, setCup] = useState(null);

  useEffect(() => {
    if (race) {
      // Make an API request to get the cup information by race ID
      getSingleCup(race.id)
        .then((cupData) => {
          setCup(cupData);
        })
        .catch((error) => {
          console.error('Error fetching cup:', error);
        });
    }
  }, [race]);

  return (
    <div>
      <h2>Congratulations!</h2>
      {cup ? (
        <p>You&apos;re participating in {cup.name}</p>
      ) : (
        <p>Loading cup information...</p>
      )}

      {/* Display other information like character, vehicle, etc. */}
    </div>
  );
};

export default CongratulationsPage;
