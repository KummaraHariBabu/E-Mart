import React from 'react'
import  './App.css'
import LandingPage from './stores/pages/LandingPage'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Mobiles from './stores/components/Mobiles'
import MobilePage from './stores/pages/MobilePage'
import MobileSingle from './stores/singles/MobileSingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/abc' element={<Mobiles/>} />
        <Route path='/mobiles' element={<MobilePage/>} />
           <Route path='/mobiles/:id' element={<MobileSingle/>} />
       </Routes>
    </div>
   )
}

export default App