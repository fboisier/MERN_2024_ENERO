import { Navigate, Route, Routes } from 'react-router-dom'
import ListPlayers from './views/ListPlayers'
import StatusGame from './views/StatusGame'
import AddPlayer from './views/AddPlayer'
import Contenedor from './components/Contenedor'
import LoginRegister from './views/LoginRegister'
import { useState } from 'react'
import UserContext from './context/UserContext'
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'

const App = () => {

    const userDetails = JSON.parse(localStorage.getItem("user"));
    const userInfo = userDetails ? userDetails : null;
    const [user, setUser] = useState(userInfo)

    const setUserKeyValue = (clave, valor) => {
        setUser({ ...user, [clave]: valor })
    }

    const objetoContexto = {
        user,
        setUser,
        setUserKeyValue
    }

    return (
        <UserContext.Provider value={objetoContexto}>
            <Routes>
                <Route path="/" element={<Navigate to="/players/list" />} />
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginRegister />
                    </PublicRoute>
                } />
                <Route path="/players/" element={
                    <PrivateRoute>
                        <Contenedor />
                    </PrivateRoute>
                }>
                    <Route path="list" element={<ListPlayers />} />
                    <Route path="addplayer" element={<AddPlayer />} />
                    <Route path="status/:game" element={<StatusGame />} />
                </Route>
            </Routes>
        </UserContext.Provider>
    )
}

export default App