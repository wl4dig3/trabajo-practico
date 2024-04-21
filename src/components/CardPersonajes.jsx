import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPersonajes({pokemon}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/personajes/${pokemon.id}`)
    }
  return (
    <>
    {/* <div id={pokemon.id} onClick={handleClick} style={{cursor: 'pointer', padding: '0.5rem'}}>
        <img src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon.name}`} />
        <h2>{pokemon.name}</h2>
    </div> */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>
  )
}

export default CardPersonajes