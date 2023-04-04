import { Link } from "components/Common.styled"

export const AuthBar = () => {
    return(<div>
        <Link to="/register"  className='me-3'>Register</Link>
        <Link to="/login">Log In</Link>
      </div>)
}