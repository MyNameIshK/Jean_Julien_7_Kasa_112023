import React from 'react';
import "./ErrorPage.css";
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='errorPage'>
      <div className='error_404'>404</div>
      <div className='error_texte'>Oups! La page que vous demandez n'existe pas.</div>
      <Link to="/"><div>Retourner sur la page d'accueil</div></Link>
    </div>
  )
}

export default ErrorPage