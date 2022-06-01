import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getTweet } from '../api/tweets';
import Tweet from '../components/tweet';

export default function SingleTweet() {
  const params = useParams();
  const [data, setData] = useState({}); // Varibalbe de datos
  const [error, setERROR] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadTweet() {
    setLoading(true); // pa que cuando vaya cargando datos diga loading...
    try {
      const response = await getTweet({ id: params.id });
      setData(response);
      setLoading(false);
    } catch (error) {
      setERROR(error);
      setLoading(false);
    }
  }

  useEffect(function () {
    loadTweet();
  }, []);

  if (loading) {
    // solo cuando es true entra
    return (
      <>
        <center>
          <Spinner animation='grow' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </center>
      </>
    );
  }
  return (
    <div className='container'>
      {error && <p>{error.message}</p>}
      <Tweet user={data.user} date={data.date} content={data.content} />
    </div>
  );
}
