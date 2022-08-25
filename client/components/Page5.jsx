import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


const Page5 = () => {
  
  
  return (
    <div className='container'>
      <p className='center-text'>You may not like what you find...</p>
      <div className='flex-child'>
      <Link to='/page6'><button className='enter'>Go down the magcial slide</button></Link>
      </div>
      <div className='flex-child'>
      <Link to='/page4'><button className='enter'>To much cuteness in this new world, Run</button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default Page5