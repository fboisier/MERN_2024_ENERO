import PropTypes from 'prop-types';
import axios from "axios";

const ActionsPlayers = ({ player, game, successCallback }) => {

    const indexGame = game - 1

    const { games } = player
    const handleButton = (action) =>{

        const url = `http://localhost:8000/api/player/${player._id}/${indexGame}`
        axios.patch(url, { "status": action } , { withCredentials: true })
            .then(res => {
                console.log(res.data)
                successCallback(player, indexGame, action)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <button onClick={() => handleButton('Playing')} className={`btn me-2 btn-${ (games[indexGame] == 'Playing') ? 'success': 'light' }`}>Playing</button>
            <button onClick={() => handleButton('Not Playing')} className={`btn me-2 btn-${ (games[indexGame] == 'Not Playing') ? 'danger': 'light' }`}>Not Playing</button>
            <button onClick={() => handleButton('Undesided')} className={`btn me-2 btn-${ (games[indexGame] == 'Undesided') ? 'warning': 'light' }`}>Undesided</button>
        </>

    )
}

ActionsPlayers.propTypes = {
    player: PropTypes.object.isRequired,
    game: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired
}

export default ActionsPlayers