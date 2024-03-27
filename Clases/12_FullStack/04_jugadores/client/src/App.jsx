import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import ListPlayers from './views/ListPlayers'
import StatusGame from './views/StatusGame'
import AddPlayer from './views/AddPlayer'

const App = () => {
    return (
        <div className='container mt-3'>
            <NavLink to="/players/list"  className='menu-principal me-3'>Manage Players</NavLink>
            <NavLink to="/players/status/1" className='menu-principal'>Manage Players Status</NavLink>
            <Routes>
                <Route path="/" element={<Navigate to="/players/list" />} />
                <Route path="/players/list" element={<ListPlayers />} />
                <Route path="/players/addplayer" element={<AddPlayer />} />
                <Route path="/players/status/:game" element={<StatusGame />} />
            </Routes>
        </div>
    )
}

export default App