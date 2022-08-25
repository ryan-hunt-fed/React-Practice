import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


const Page1 = () => {
  
  
  return (
    <div className='container'>
      <p className='center-text'>You've started your journey on the street.</p>
      <div className='flex-child'>
      <Link to='/page2'><button className='enter'>Enter the building</button></Link>
      </div>
      <div className='flex-child'>
      <Link to='/'><button className='enter'>Go back</button></Link>
      </div>
      
      <Footer />
    </div>
  )
}

export default Page1