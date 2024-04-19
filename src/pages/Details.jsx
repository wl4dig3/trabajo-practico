import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Details() {
    const [personaje, setPersonaje] = useState()
    const {id} = useParams();
    useEffect( () => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(resp => resp.json())
        .then(data => setPersonaje(data))

    },[id])
  return (
    <div>
      {personaje !== undefined ? (
        <>
          <h1>{personaje.name}</h1>
          <img src={personaje.image} alt={personaje.name} />
        </>
      ) : (
        <h2>No existe ese personaje</h2>
      )}
    </div>
  );
}

export default Details