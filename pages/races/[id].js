import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSingleRace } from '../../utils/data/raceData';
import RaceForm from '../../components/RaceForm';

export default function EditRace() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleRace(id).then(setEditItem);
    // console.warn('Race afer getSingleRace:', editItem);
  }, [id]);

  return (
    <>
      <Head>
        <title>Update Race </title>
      </Head>
      <RaceForm race={editItem} />
    </>
  );
}
