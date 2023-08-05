import { clientCredentials } from '../client';

const getSingleVehicle = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/vehicles/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getVehicles = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/vehicles`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getSingleVehicle,
  getVehicles,
};
