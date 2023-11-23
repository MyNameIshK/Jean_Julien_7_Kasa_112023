import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar_logo'>
            <a href='http://localhost:5173/'><img src='/logo.png' alt='Logo de Kasa'></img></a>
        </div>
        <Link to="/"><div className='navbar_texte'>Accueil</div></Link>
        <Link to="/About"><div className='navbar_texte'>À Propos</div></Link>
    </nav>
  )
}

export default Navbar