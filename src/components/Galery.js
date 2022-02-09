import React from 'react'
import './Galery.css';

function Galery() {
  return (
    <>
      <div className='main-galery'>
        <div className='main-galery__img_1'></div>
        <div className='main-galery__img_2'></div>
        <div className='main-galery__img_3'></div>
        <div className='main-galery__img_4'></div>
        <div className='main-galery__img_5'></div>
        <div className='main-galery__img_6'></div>
      </div>
      <div className='description'>
        <h1 className='description__title'>Amazing experience in your hand...</h1>
        <p className='descrition__constent'>Join us in your life time adventure without living you couch.</p>
      </div>
    </>
  )
}

export default Galery