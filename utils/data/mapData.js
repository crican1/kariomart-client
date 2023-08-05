import { clientCredentials } from '../client';

const getMaps = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/maps`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleMap = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/maps/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getMaps,
  getSingleMap,
};
