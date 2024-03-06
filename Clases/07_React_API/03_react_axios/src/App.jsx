import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [paginacion, setPaginacion] = useState(0)

  const handleLoadPokemons = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${paginacion * 10}`)
    .then(response => response.json())
    .then(data => {
      setPaginacion(paginacion+1)
      setPokemons([...pokemons, ...data.results])
    })
  }

  const handleLoadPokemonsAxios = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${paginacion * 10}`)
    .then(response => {
      console.log(response)
      setPaginacion(paginacion+1)
      setPokemons([...pokemons, ...response.data.results])
    })
  }

  return (
    <div className='container mt-5'>
      <div className="d-grid gap-2">
        <button onClick={handleLoadPokemonsAxios} className="btn btn-primary" type="button">Fetch Pokemons</button>
      </div>
      <ol>
        {
          (pokemons.length === 0) 
            ? <p>Aun no presionas el botón!</p>
            : pokemons.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))
        }
      </ol>
    </div>
  )
}

export default App
