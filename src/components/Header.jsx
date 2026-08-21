import KasaLogo from '../assets/images/KasaLogo.png'
import { NavLink, Link} from 'react-router-dom';

const Header = () => {

  return (
    <header className='header'>
      <Link to="/">
        <img src={KasaLogo} alt="Logo Kasa rouge" className='header_logo'/>
      </Link>
      <nav className='header_nav'>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) =>
          isActive ? "navLink active" : "navLink"
        }>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) =>
          isActive ? "navLink active" : "navLink"
        }>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
