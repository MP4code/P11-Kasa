import KasaLogo from '../assets/images/KasaLogo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header'>
      <Link to="/">
        <img src={KasaLogo} alt="Logo Kasa rouge" className='header_logo'/>
      </Link>
      <nav className='header_nav'>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
