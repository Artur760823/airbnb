import React from 'react'
import './Card.css';

function Card() {
  return (
    <div className='cards-container'>
      <div className='card'>
        <div className='card__img'></div>
        <span className='card__stats'>4.5</span>
        <span className='card__star'>(6) *</span>
        <span>USA</span>
        <p className='card__description'>Rap session with Eminem</p>
        <p className='card__costs'>From 200.99$ / person</p>
      </div>
      <div className='card'>
        <div className='card__img'></div>
        <span className='card__stats'>4.5</span>
        <span className='card__star'>(6) *</span>
        <span>USA</span>
        <p className='card__description'>Rap session with Eminem</p>
        <p className='card__costs'>From 200.99$ / person</p>
      </div>
      <div className='card'>
        <div className='card__img'></div>
        <span className='card__stats'>4.5</span>
        <span className='card__star'>(6) *</span>
        <span>USA</span>
        <p className='card__description'>Rap session with Eminem</p>
        <p className='card__costs'>From 200.99$ / person</p>
      </div>
    </div>
  )
}

export default Card