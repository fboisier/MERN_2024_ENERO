import { NavLink, Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Contenedor = () => {
    return (
        <>
            <NavBar />
            <div className='container mt-3'>
                <NavLink to="/players/list" className='menu-principal me-3'>Manage Players</NavLink>
                <NavLink to="/players/status/1" className='menu-principal'>Manage Players Status</NavLink>
                <Outlet />
            </div>
        </>

    )
}

export default Contenedor