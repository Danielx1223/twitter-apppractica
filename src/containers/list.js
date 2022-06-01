import React, { useEffect, useState } from 'react'; // useSTATE para mantener estados dentro app
import Tweet from './../components/tweet'; //use efect para hacer efectos segundarios
import { getTweets } from './../api/tweets';
import { useNavigate } from 'react-router-dom'; // Para ir a otra ruta dando click
import { Spinner } from 'react-bootstrap';

export function List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]); // Varibalbe de datos
  const [error, setERROR] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadList() {
    setLoading(true); // pa que cuando vaya cargando datos diga loading...
    try {
      const response = await getTweets();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setERROR(error);
      setLoading(false);
    }
  }

  useEffect(function () {
    loadList();
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
      {data.map(function (item) {
        return (
          <div
            onClick={function (event) {
              navigate(`/tweets/${item.id}`);
            }}
            key={item.id}
          >
            <Tweet user={item.user} date={item.date} content={item.content} />
          </div>
        );
      })}
    </div>
  );
}
