import React, { useState, useEffect } from 'react';
import VehicleCard from '../components/VehicleCard';
import { getVehicles } from '../utils/data/vehicleData';

function VehiclesPage() {
  const [vehicles, setVehicles] = useState([]);

  const getAllVehicles = () => {
    getVehicles().then(setVehicles);
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicleObj={vehicle} onUpdate={getAllVehicles} />
        ))}
      </div>
    </div>
  );
}

export default VehiclesPage;
