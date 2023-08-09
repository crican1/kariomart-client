import React, { useState, useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import VehicleCard from '../components/VehicleCard';
import { getVehicles } from '../utils/data/vehicleData';

function VehiclesPage() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState('');
  console.warn(search);

  const getAllVehicles = () => {
    getVehicles().then(setVehicles);
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <>
      <Form>
        <InputGroup className="my-3" style={{ width: '18rem', margin: '10px' }}>
          <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search Vehicles" />
        </InputGroup>
      </Form>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {vehicles.filter((vehicle) => (search.toLowerCase() === '' ? vehicle : vehicle.name.toLowerCase().includes(search))).map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicleObj={vehicle} onUpdate={getAllVehicles} />
          ))}
        </div>
      </div>
    </>
  );
}

export default VehiclesPage;
