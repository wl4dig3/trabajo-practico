import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function CardPersonajes({pokemon}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/personajes/${pokemon.id}`)
    }
  return (
    <>
    <Card className='cards-style'>
      <Card.Img className="imagen" variant="top" src={pokemon.sprites.other.dream_world.front_default} />
      <Card.Body>
        <Card.Title className='card-title'>Nombre: {pokemon.name.toUpperCase()}</Card.Title>
        <button className='card-button' onClick={handleClick}>Ver detalle</button>
      </Card.Body>
    </Card>

    </>
  )
}

export default CardPersonajes