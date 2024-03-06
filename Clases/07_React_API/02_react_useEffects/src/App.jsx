import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [paginacion, setPaginacion] = useState(0)
  const [enviarRequest, setEnviarRequest] = useState(false)

  const handleButton = () => {
    setEnviarRequest(true)
  }

  useEffect(() => {
    if(enviarRequest){
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${paginacion * 10}`)
        .then(response => response.json())
        .then(data => {
          setPaginacion(paginacion+1)
          setPokemons([...pokemons, ...data.results])
        })
      setEnviarRequest(false)
    }
  }, [enviarRequest, paginacion, pokemons])
  
  useEffect(()=> {
    console.log("HOLA!");
  }, [])

  return (
    <div className='container mt-5'>
      <div className="d-grid gap-2">
        <button onClick={handleButton} className="btn btn-primary" type="button">Fetch Pokemons</button>
      </div>
      <ol>
        {
          (pokemons.length === 0) 
            ? <p className='mt-5'>Aun no presionas el botón!</p>
            : pokemons.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))
        }
      </ol>
    </div>
  )
}

export default App
