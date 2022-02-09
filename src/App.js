import React from 'react'
import NavBar from './components/NavBar';
import Galery from './components/Galery';
import Card from './components/Card';

function App() {
  return (
    <div className='wrapper'>
      <NavBar />
      <Galery />
      <Card />
    </div>
  )
}

export default App