import KasaLogo from '../assets/images/KasaLogo.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={KasaLogo} alt="Logo Kasa rouge" className='header_logo'/>
      <nav className='header_nav'>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">A Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
