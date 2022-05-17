export async function getTweets() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/tweets`); // para poner todos los end points de la api
  const json = await response.json();

  return json;
}
