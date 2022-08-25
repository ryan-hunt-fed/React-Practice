import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


const Home = () => {
  
  
  return (
    <div className='container'>
      <p className='center-text'>Lets play a game..</p>
      <div className='flex-child'>
      <Link to='/page1'><button className='enter'>Begin your quest</button></Link>
      </div>
      <Footer />
      
    </div>
  )
}

export default Home