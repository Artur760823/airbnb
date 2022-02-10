import React from 'react'
import NavBar from './components/NavBar';
import Galery from './components/Galery';
import Card from './components/Card';
import pic from './images/eminem.jpg';


function App() {
  return (
    <div className='wrapper'>
      <NavBar />
      <Galery />
      <Card
        image={pic}
        country="USA"
        rating="5.0"
        count="(6) *"
        title="Rap session with Eminem"
        price="From 200.99$"
      />
    </div>
  )
}

export default App