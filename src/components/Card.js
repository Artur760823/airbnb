import React from 'react'
import './Card.css';

function Card(props) {
  return (
    <div className='cards-container'>
      <div className='card'>
        <img className='card__img' src={props.image} />
        <span className='card__stats'>{props.rating}</span>
        <span className='card__star'>{props.count} {props.country}</span>
        <p className='card__description'>{props.title}</p>
        <p className='card__costs'>{props.price}/ person</p>
      </div>
    </div>
  )
}

export default Card