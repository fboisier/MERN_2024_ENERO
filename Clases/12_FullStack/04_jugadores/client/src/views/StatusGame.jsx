import { useParams } from "react-router-dom"

const StatusGame = () => {

    const {game} = useParams()

    return (
        <div>StatusGame {game}</div>
    )
}

export default StatusGame