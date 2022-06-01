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
