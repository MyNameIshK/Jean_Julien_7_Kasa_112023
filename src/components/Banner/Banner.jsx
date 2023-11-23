import React from 'react';
import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
      <h1 className='banner_texte'>Chez vous, partout et ailleurs</h1>
      <img src='./banner.png' alt='banner_kasa' className='banner_image'></img>
    </div>
  )
}

export default Banner