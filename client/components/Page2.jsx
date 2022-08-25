import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


const Page2 = () => {
  
  
  return (
    <div className='container'>
      <p className='center-text'>How are you feeling now after entering the building?</p>
      <div className='flex-child'>
      <Link to='/page3'><button className='enter'>Walk down the hallway</button></Link>
      </div>
      <div className='flex-child'>
      <Link to='/page1'><button className='enter'>Exit the building</button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default Page2