import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Head from 'next/head';
import { getCups } from '../../utils/data/cupData';
import CupCard from '../../components/CupCard';

function Cups() {
  const [cups, setCups] = useState([]);
  const [search, setSearch] = useState('');
  console.warn(search);

  const showCups = () => {
    getCups().then((data) => setCups(data));
  };
  useEffect(() => {
    showCups();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Cups</title>
      </Head>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <article className="text-center d-flex flex-column justify-content-center align-content-center">
          <h1>Cups</h1>
          <Form>
            <InputGroup className="my-3" style={{ width: '18rem', margin: '10px' }}>
              <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search Cups" />
            </InputGroup>
          </Form>
          {cups.filter((cup) => (search.toLowerCase() === '' ? cup : cup.name.toLowerCase().includes(search))).map((cup) => (
            <section key={`cup--${cup.id}`} className="cup">
              <CupCard
                id={cup.id}
                name={cup.name}
                raceId={cup.race_id}
                imageUrl={cup.image_url}
                onUpdate={Cups}
              />
            </section>
          ))}
        </article>
      </div>
    </>
  );
}

export default Cups;
