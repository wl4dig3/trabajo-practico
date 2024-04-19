import  { useEffect, useState} from 'react'
import CardPersonajes from '../components/CardPersonajes';


function Home() {
    const [personajes, setPersonajes] = useState([]);
    const BASE_URL = 'https://rickandmortyapi.com/api/character'
    useEffect( () => {
        fetch(BASE_URL)
        .then(resp => resp.json())
        .then(data => setPersonajes(data.results))
    }, [])
  return (
    <div>
        {
            personajes.map( p => <CardPersonajes key={p.id} {...p} />)
        }
    </div>
  )
}

export default Home