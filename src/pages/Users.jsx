import { Link } from "react-router-dom"
import useUserContext from "../contaxt/userContext"


const Users = () => {
    const { users } = useUserContext()
    return <>
        <h1>All users </h1>
        <ul>
            {users.map(user => <li>
                <p><Link to={`${user.id}`}>{user.email} </Link></p>
                {user?.imgUrl && <img src={user.imgUrl} alt="github "/>}
            </li>)}
        </ul>
    </>
}


export default Users 