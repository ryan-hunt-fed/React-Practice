import React from 'react'
import {Routes, Route} from 'react-router-dom'


import Header from './Header'

import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'

const App = () => {
  
  
  return (
    <>
    <div>
      <Header />
    </div>
    <Routes>
    <Route path='/' element = {<Home />}/>
    <Route path='/page1' element = {<Page1 />}/>
    <Route path='/page2' element = {<Page2 />}/>
    <Route path='/page3' element = {<Page3 />}/>
    <Route path='/page4' element = {<Page4 />}/>
    <Route path='/page5' element = {<Page5 />}/>
    <Route path='/page6' element = {<Page6 />}/>
    <Route path='/page7' element = {<Page7 />}/>
    <Route path='/page8' element = {<Page8 />}/>
    </Routes>
    <div>
     
    </div>
    </>
      
    
  )
}

export default App
