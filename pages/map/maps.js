import React, { useEffect, useState } from 'react';
import DisplayMapCard from '../../components/MapCard';
import { getMaps } from '../../utils/data/mapData';

export default function MapHome() {
  const [maps, setMaps] = useState([]);

  const getAllMaps = () => {
    getMaps().then(setMaps);
  };

  useEffect(() => {
    getAllMaps();
  }, []);

  return (
    <div>
      <div className="characters">
        {maps.map((track) => (
          <DisplayMapCard key={track.id} mapObj={track} />
        ))}
      </div>
    </div>
  );
}
