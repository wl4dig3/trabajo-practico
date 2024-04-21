import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Details() {
    // const [loading, setLoading] = useEffect(true):
    const [personaje, setPersonaje] = useState()
    const {id} = useParams();
    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => resp.json())
        .then(data => setPersonaje(data))
        // setLoading(false)
    },[id])
  return (
    <div>
      {personaje !== undefined ? (
        <>
          <h1>{personaje.name}</h1>
          {/* <img src={personaje.image} alt={personaje.name} /> */}
          {/* <p>Estatus: {personaje.status}</p> */}
          {/* <p>Especie: {personaje.species}</p> */}
        </>
      ) : (
        <h2>No existe ese personaje</h2>
      )}
    </div>
  );
}

export default Details