import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'


const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (

    <div className='py-3'>
      <div className="navbar d-flex justify-content-between align-items-center">
        {/* <img width={'120px'} src={assets.logo} alt="" /> */}
        <h2 className='fw-bolder m-0'><span style={{color: '#0d5f53'}}>RanCo</span>Tech</h2>
        <ul className='nav-menu d-flex gap-4 m-0'>
          <li className={menu==="home"?"active":""}>Home</li>
          <li className={menu==="menu"?"active":""}>Menu</li>
          <li className={menu==="mobile-app"?"active":""}>Mobile App</li>
          <li className={menu==="contact-us"?"active":""}>Contact Us</li>
        </ul>
        <div className='d-flex align-items-center gap-4'>
          <img width={'25px'} height={'25px'} src={assets.search_icon} alt="" />
          <div>
            <img width={'25px'} height={'25px'} src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button className='btn py-2 px-3'>Sign in</button>
        </div>
      </div>
    </div>

  )
}

export default Navbar