function transformTweet(item) {
  return {
    id: item._id,
    content: item.content,
    date: item.createdAt,
    user: {
      firstname: item.userID ? item.userID.firstname : 'Unknown',
      lastname: item.userID ? item.userID.lastname : 'Unknown',
      username: item.userID ? item.userID.username : 'Unknown',
    },
  };
}

export async function getTweets() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/tweets`); // para poner todos los end points de la api
  const json = await response.json();

  const transformData = json.data.map(transformTweet);

  return {
    data: transformData,
    meta: json.meta,
  };
}

export async function getTweet({ id }) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/v1/tweets/${id}`
  ); // para poner todos los end points de la api con el ID y sólo muestro lo de un tweet
  const json = await response.json();

  return transformTweet(json.data);
}

export async function createTweet(tweet) {
  const token = localStorage.getItem('token'); // sacamos el token de esa variable

  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/tweets/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tweet), // body data type must match "Content-Type" header
  }); // para poner todos los end points de la api con el ID y sólo muestro lo de un tweet
  const json = await response.json();
  if (response.ok) {
    return transformTweet(json.data);
  } else {
    return Promise.reject(json.message);
  }
}
