import { clientCredentials } from '../client';

const getSingleRace = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/races`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(resolve)
    .catch(reject);
});

const getRaces = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/races`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(resolve)
    .catch(reject);
});

const createRace = (raceData) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/races`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(raceData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(resolve)
    .catch(reject);
});

const updateRace = (id, currentRace) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/races/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(currentRace),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(resolve)
    .catch(reject);
});

const deleteRace = (raceId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/races/${raceId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      resolve();
    })
    .catch(reject);
});

export {
  getRaces,
  getSingleRace,
  createRace,
  updateRace,
  deleteRace,
};
