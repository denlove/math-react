import { Link } from 'react-router-dom'
import { ABOUT_ROUTE, ROOT_ROUTE } from '../../utils/routes'
import Button from '../../ui/Button/Button'

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to={ROOT_ROUTE}>home</Link>
            </li>
            <li>
                <Link to={ABOUT_ROUTE}>about</Link>
            </li>
            <Button />
        </ul>
    )
}

export default NavBar
