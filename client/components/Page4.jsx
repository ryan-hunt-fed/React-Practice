import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


const Page4 = () => {
  
  
  return (
    <div className='container'>
      <p className='center-text'>Are you sure you want to continue?</p>
      <div className='flex-child'>
      <Link to='/page5'><button className='enter'>Enter the magical door</button></Link>
      </div>
      <div className='flex-child'>
      <Link to='/page3'><button className='enter'>Flee down the stairs</button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default Page4