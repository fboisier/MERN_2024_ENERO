import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';

const SubMenu = ({children}) => {
    return (
        <div className="container">
            <NavLink to="/players/list" className="me-3 menu-segundario">List</NavLink>
            <NavLink to="/players/addplayer" className="menu-segundario">Add Player</NavLink>
            {children}
        </div>
    )
}

SubMenu.propTypes = {
    children: PropTypes.node
}

export default SubMenu