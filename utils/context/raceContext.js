import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { useAuth } from './authContext';

export const RaceContext = createContext();

export const RaceContextProvider = ({ children }) => {
  const user = useAuth();
  console.warn('uid:', user.uid);
  const { uid } = user;
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedMap, setSelectedMap] = useState(null);
  const [race, setRace] = useState(null); // Add race state

  const addToRace = (raceItem) => {
    setRace((prevRace) => ({
      ...prevRace,
      ...raceItem,
      uid,
    }));
  };

  useEffect(() => {
    localStorage.setItem('race', JSON.stringify(race));
  }, [race]);

  // Load race object from localStorage when the component mounts
  useEffect(() => {
    const storedRace = JSON.parse(localStorage.getItem('race'));
    if (storedRace) {
      setRace(storedRace);
    }
  }, []);

  useEffect(() => {
    console.warn('Race Object:', selectedCharacter, selectedVehicle, selectedMap, user.uid);
  }, [selectedCharacter, selectedVehicle, selectedMap, race, user.uid]);

  return (
    <RaceContext.Provider
      value={{
        selectedCharacter,
        setSelectedCharacter,
        selectedVehicle,
        setSelectedVehicle,
        selectedMap,
        setSelectedMap,
        race,
        addToRace,
        uid,
      }}
    >
      {children}
    </RaceContext.Provider>
  );
};

RaceContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
