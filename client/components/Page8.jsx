import React from 'react'
import {Link} from 'react-router-dom'
import Pixels from './Pixels'


const Page8 = () => {
  
    const multiple = Array.from({length: 66}, (idx) => {
        return <Pixels key={idx} />
      })
  return (
    <div className='container'>
      <p className='center-text'>Congratulations, you just wasted your time with this dumb surprise.</p>
      <div className='flex-child'>
      <Link to='/'><button className='enter'>Restart</button></Link>
      </div>
      <br></br>
      <div>
        <img className='cat' src='/images/cat.jpeg' alt='cat'/>
      </div>
      <br></br>
      <div className='Pixel'>
        {multiple}
      </div>
      
    </div>
  )
}

export default Page8

