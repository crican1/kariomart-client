import { clientCredentials } from '../client';

const getCharacters = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/characters`, {
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

const getSingleCharacter = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/characters/${id}`, {
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
  getCharacters,
  getSingleCharacter,
};
