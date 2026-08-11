import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='errorPage'>
      <div className='imgError'></div>
      <p className='errorPage_text'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error