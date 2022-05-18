import React, { useEffect, useState } from 'react'; // useSTATE para mantener estados dentro app
import Tweet from './../components/tweet'; //use efect para hacer efectos segundarios
import { getTweets } from './../api/tweets';

export function List() {
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
    return <p>Loading ... </p>;
  }

  return (
    <div className='container'>
      {error && <p>{error.message}</p>}
      {data.map(function (item) {
        return (
          <Tweet
            key={item._id}
            user={item.user}
            date={item.date}
            content={item.content}
          />
        );
      })}
    </div>
  );
}
