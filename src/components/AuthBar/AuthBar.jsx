import { NavLink } from "react-router-dom"

export const AuthBar = () => {
    return(<div>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </div>)
}