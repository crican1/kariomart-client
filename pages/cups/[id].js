/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import Head from 'next/head';
import { getSingleCup } from '../../utils/data/cupData';

const ViewCup = () => {
  const router = useRouter();
  const [cupDetails, setCupDetails] = useState({});
  const { id } = router.query;

  useEffect(() => {
    getSingleCup(id).then((cupData) => {
      setCupDetails(cupData);
    });
  }, [id]);

  return (
    <>
      <Head>
        <title>{cupDetails.name}</title>
      </Head>
      <Card className="text-center">
        <Card.Title> {cupDetails.name}</Card.Title>
        <img src={cupDetails.image_url} alt={cupDetails.name} style={{ height: '8em' }} className="charac-img" />
      </Card>
    </>
  );
};

export default ViewCup;
