import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    <div className='container-card-detail'>
      {personaje !== undefined ? (
        <>
          <Card className="cards-style">
            <Card.Img
              className="imagen"
              variant="top"
              src={personaje.sprites.other.dream_world.front_default}
            />
            <Card.Body>
              <Card.Title className='card-title'>Nombre: {personaje.name.toUpperCase()}</Card.Title>
              <Card.Text>Puntos: {personaje.stats[0].base_stat}</Card.Text>
              <Card.Text>
                Movimiento mortal: {personaje.moves[0].move.name}
              </Card.Text>
              <Card.Text>
                Indice de juego: {personaje.game_indices[0].game_index}
              </Card.Text>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </>
      ) : (
        <h2>No existe ese personaje</h2>
      )}
    </div>
  );
}

export default Details