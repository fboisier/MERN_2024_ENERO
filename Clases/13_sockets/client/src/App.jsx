import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import io from "socket.io-client"

function App() {
  const [count, setCount] = useState(0)
  const [socket] = useState(io(":8000"))

  useEffect(() => {
    console.log("CLIENT: a user connected: ", socket)

    socket.on("send_data_to_all_other_clients", (data) => {
      console.log("CLIENT PARA TODOS:", data)
    })

  }, [socket])

  const handleClicEmit = () => {
    socket.emit("event_from_client", "data")
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 onClick={handleClicEmit}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
