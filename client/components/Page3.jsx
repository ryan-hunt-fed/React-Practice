import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


const Page3 = () => {
  
  
  return (
    <div className='container'>
      <p className='center-text'>You have a long way to go...</p>
      <div className='flex-child'>
      <Link to='/page4'><button className='enter'>Proceed up the stairs</button></Link>
      </div>
      <div className='flex-child'>
      <Link to='/page2'><button className='enter'>Run out of the hallway</button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default Page3