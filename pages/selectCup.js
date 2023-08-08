/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import CupCard from '../components/CupCard';
import { getCups } from '../utils/data/cupData';

export default function Cups() {
  const [cups, setCups] = useState([]);

  const getAllCups = () => {
    getCups().then(setCups);
  };

  useEffect(() => {
    getAllCups();
  }, []);

  return (
    <div>
      <div className="cups">
        {cups.map((cup) => (
          <CupCard key={cup.id} cupObj={cup} />
        ))}
      </div>
    </div>
  );
}
