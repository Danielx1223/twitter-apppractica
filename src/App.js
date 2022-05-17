import React, { useState } from 'react'; // useSTATE para mantener estados dentro app

/* presentational component
function Item(props) {
  const { message = ' ' } = props;
  return <div>{message}</div>;
}
*/

// container component
function App() {
  const [data, setData] = useState([]);

  function add(event) {
    event.preventDefault(); // no recargar pág.
    const task = event.target.elements.task; // donde se guarda lo que guardo lo que escribo
    //setShow(true); // si clickeo se cambia a true
    setData([
      ...data,
      task.value, //sobre escribir valores en data
    ]);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <h1> Lista de cosas por hacer </h1>
      <form onSubmit={add}>
        <label> Tareas </label>
        <input type='text' name='task' />
        <button type='submit'>Agregar</button>
        <button type='button' onClick={refreshPage}>
          Borrar todo
        </button>
      </form>
      <ul>
        {
          // inserta los elementos del array en DOM para listarlos.
          data.map(function (item, index) {
            // key es para que no salga error y se le coloca el index para evitar renderizar todo si solo necesito editar una sola variable
            return <li key={index}>{item}</li>;
          })
        }
      </ul>
    </div>
  );
}

export default App;
