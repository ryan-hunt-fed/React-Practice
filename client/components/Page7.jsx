import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


const Page7 = () => {
  
  
  return (
    <div className='container'>
      <p className='center-text'>Are you absolutley sure?????? You're in for some danger if you keep going.</p>
      <div className='flex-child'>
      <Link to='/page8'><button className='enter'>Proceed to the dark corner??</button></Link>
      </div>
      <div className='flex-child'>
      <Link to='/page6'><button className='enter'>Go back in terror</button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default Page7