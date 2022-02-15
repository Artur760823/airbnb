import React from 'react'
import NavBar from './components/NavBar';
import Galery from './components/Galery';
import Card from './components/Card';
import data from './data';


function App() {

  const cardElements = data.map(item => {
    return (
      <Card
        id={item.id}
        item={item}
      />
    )
  })
  return (
    <div className='wrapper'>
      <NavBar />
      <Galery />
      <section className='card-list'>
        {cardElements}
      </section>

    </div>
  )
}

export default App