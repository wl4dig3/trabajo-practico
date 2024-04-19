import { useNavigate } from 'react-router-dom';

function CardPersonajes({name, image, id}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/personajes/${id}`)
    }
  return (
    <div id={id} onClick={handleClick}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
    </div>
  )
}

export default CardPersonajes