import React, { useContext, useEffect, useState } from 'react';
import DisplayMapCard from '../../components/MapCard';
import { getMaps } from '../../utils/data/mapData';
import { createRace } from '../../utils/data/raceData';
import { RaceContext } from '../../utils/context/raceContext';

export default function MapHome() {
  const { race } = useContext(RaceContext);
  const [maps, setMaps] = useState([]);

  const getAllMaps = () => {
    getMaps().then(setMaps);
  };

  useEffect(() => {
    getAllMaps();
  }, []);

  const handleCreateRace = () => {
    createRace(race)
      .then((response) => {
        // Race created successfully, handle the response if needed
        console.warn('Race created:', response);
      })
      .catch((error) => {
        // Handle errors if the race creation fails
        console.error('Error creating race:', error);
      });
  };

  return (
    <div>
      <div className="characters">
        {maps.map((track) => (
          <DisplayMapCard key={track.id} mapObj={track} />
        ))}
      </div>
      <button type="button" onClick={handleCreateRace}>Create Race</button>
    </div>
  );
}
