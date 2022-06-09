import { setSession } from '../auth';

export async function signIn({ username, password }) {
  // se encarga de recibir username y password para entrar
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/v1/users/signin`,
    {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
    }
  ); // para poner todos los end points de la api con el ID y sólo muestro lo de un tweet
  const json = await response.json();
  if (response.ok) {
    setSession({
      user: json.data,
      token: json.meta.token,
    });

    return json;
  } else {
    return Promise.reject(json.message);
  }
}
