import DeletePlayer from "../components/DeletePlayed"
import SubMenu from "../components/SubMenu"
import useAxios from "../hooks/useAxios"

const ListPlayers = () => {

    const {data, isLoading, error, setData} = useAxios("http://localhost:8000/api/player")

    if(error){
        return <div>{error.message}</div>
    }

    if(isLoading){
        return <div>Loading...</div>
    }

    const DeleteSuccessPlayer = (playerId) =>{
        setData(data.filter(player => player._id !== playerId))
    }

    return (
        <SubMenu>
            <div>
                <table className="mt-4 table table-striped table-hover table-bordered">
                    <thead> 
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((player) => (
                            <tr key={player._id}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td><DeletePlayer playerId={player._id} name={player.name} successCallback={DeleteSuccessPlayer} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SubMenu>
    )
}

export default ListPlayers