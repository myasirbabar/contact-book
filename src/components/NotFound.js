import { Link } from "react-router-dom"
import './css/NotFound.css'
import { FaTimes } from 'react-icons/fa'

const NotFound = () => {
    return (
        <div>
            <h1> <FaTimes style={{ color: 'red'}} /> Access Denied </h1>
            <hr />
            <p>
                Invalid Url Pattern
                <br /><br /> Click <Link to="/">here</Link> To return To Home Page.
            </p>
        </div>
    )
}

export default NotFound