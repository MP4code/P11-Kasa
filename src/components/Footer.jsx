import LOGO from '../assets/images/LOGO.png'
const Footer = () => {
  return (
    <footer className="footer">
      <img src={LOGO} alt="Logo" className="footer_logo" />
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer