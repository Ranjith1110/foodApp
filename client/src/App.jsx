import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { assets } from './assets/frontend_assets/assets'

function App() {
  return (
    <>
    <div className='app'>
    <Navbar />
    <img src={assets.bag_icon} alt="" />
    </div>
    </>
  )
}

export default App