export async function getTweets() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/tweets`); // para poner todos los end points de la api
  const json = await response.json();

  const transformData = json.data.map(function (item) {
    // Para que me muestre sólo estas variables
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
  });

  return {
    data: transformData,
    meta: json.meta,
  };
}
