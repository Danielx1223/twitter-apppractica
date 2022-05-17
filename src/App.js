import React, { useEffect, useState } from 'react'; // useSTATE para mantener estados dentro app
import Tweet from './components/tweet'; //use efect para hacer efectos segundarios
import { getTweets } from './api/tweets';

function App() {
  const [data, setData] = useState([]);

  async function loadList() {
    const response = await getTweets();
    setData(response.data);
  }

  useEffect(function () {
    loadList();
  }, []);

  return (
    <div className='container'>
      {data.map(function (item) {
        return (
          <Tweet
            user={item.userID}
            date={item.createdAt}
            content={item.content}
          />
        );
      })}
    </div>
  );
}

export default App;
