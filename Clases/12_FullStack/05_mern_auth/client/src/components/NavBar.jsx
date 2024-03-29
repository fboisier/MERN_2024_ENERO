import { Link, NavLink, useNavigate } from "react-router-dom"
import axios from "axios";
import { useContext } from "react";
import UserContext from '../context/UserContext';

const NavBar = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
    };

    const logoutUser = async () => {
        try {
            await axios.post("http://localhost:8000/api/auth/logout",
                { withCredentials: true }
            );
            localStorage.removeItem("user");
            setUser(null)
            navigate("/login")
        } catch (err) {
            console.log("Error: ", err)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Jugadores</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/players/list" className="nav-link">Players</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/players/addplayer" className="nav-link">Add Player</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-nav ml-auto">
                    <button onClick={handleLogout} className="btn btn-outline-danger my-2 my-sm-0" type="button">LogOut</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar