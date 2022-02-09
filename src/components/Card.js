import React from 'react'
import './Card.css';

function Card() {
  return (
    <div className='card'>
      <div className='card__img'></div>
      <p className='card__description'>Rap session with Eminem</p>
      <p className='card__costs'>From 200.99$ / person</p>
    </div>
  )
}

export default Card