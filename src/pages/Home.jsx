import  { useEffect, useState} from 'react'
import CardPersonajes from '../components/CardPersonajes';


function Home() {
    const [personajes, setPersonajes] = useState([]);
    const [offset, setOffset] = useState(0);

    const BASE_URL = 'https://pokeapi.co/api/v2/';
    const getAllPokemon = async (limit = 50) => {
        const resp = await fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await resp.json();
        const promises = data.results.map(async(pokemon)=> {
            const resp = await fetch(pokemon.url);
            const data = await resp.json();
            return data
        });
        const results = await Promise.all(promises);
        setPersonajes(results);
    }
    useEffect( () => {
        getAllPokemon()
    }, [])
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: ' wrap' }}>
        {
            personajes.map( p => <CardPersonajes key={p.name} {...p} />)
        }
    </div>
  )
}

export default Home