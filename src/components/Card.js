import React from 'react'
import './Card.css';

function Card({ item }) {

  let badgeText;
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (item.openSpots < 5) {
    badgeText = "Last five"
  } else {
    badgeText = "Available"
  }
  return (
    <div className='cards-container'>
      <div className='card'>
        <div className='card__badge'>{badgeText}</div>
        <img className='card__img' src={item.coverImg} />
        <span className='card__stats'>{item.rating}</span>
        <span className='card__star'>{item.count} {item.country}</span>
        <p className='card__description'>{item.title}</p>
        <p className='card__costs'>{item.price}/ person</p>
      </div>
    </div>
  )
}

export default Card