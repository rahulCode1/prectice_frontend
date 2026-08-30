import { NavLink, useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => ` ${isActive ? "text-danger" : "text-dark"}`}>Home </NavLink></li>
                    <li><NavLink to="/addUser" className={({ isActive }) => ` ${isActive ? "text-danger" : "text-dark"}`}> Add User </NavLink></li>
                    <li><NavLink to="/users" className={({ isActive }) => ` ${isActive ? "text-danger" : "text-dark"}`}>Users </NavLink></li>
                    <li><NavLink to="/login" className={({ isActive }) => ` ${isActive ? "text-danger" : "text-dark"}`}>Login </NavLink></li>
                    <li><button onClick={logout}>Logout </button></li>
                </ul>
            </nav>
        </header>
    </>
}
export default Header