import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


const Page6 = () => {
  
  
  return (
    <div className='container'>
      <p className='center-text'>I'm warning you, it's not going to be pretty...</p>
      <div className='flex-child'>
      <Link to='/page7'><button className='enter'>Enter the cave of terrors</button></Link>
      </div>
      <div className='flex-child'>
      <Link to='/page5'><button className='enter'>....Run....</button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default Page6