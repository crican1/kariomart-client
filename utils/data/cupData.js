import { clientCredentials } from '../client';

const getCups = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/cups`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleCup = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/cups/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getCups,
  getSingleCup,
};
