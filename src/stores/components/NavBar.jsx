import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <Link to='/'>
                <h2>E-Mart</h2>
            </Link>
        </div>
        <div className="searchBar">
            <input type="text" name="" id="" placeholder='Search...'/>
        </div>
        <div className="user">
            <div className='user-detal'>SignIN/SignUP</div>
            <div className="cart">
            Cart
            </div>
        </div>       
    </div>
     <div className='submenu'>
                <ul>
                    <Link to='/mobiles'>
                        <li>Mobiles</li>
                    </Link>
                    <Link to='/computers'>
                        <li>Computers</li>
                    </Link>
                    <Link to='/watches'>
                        <li>Watches</li>
                    </Link>
                    <Link to='/mens'>
                        <li>Men Fashion</li>
                    </Link>
                    <Link to='/womens'>
                        <li>Women Dressing</li>
                    </Link>
                    <Link to='/furnitures'>
                        <li>Furniture</li>
                    </Link>
                    <Link to='/ac'>
                        <li>AC</li>
                    </Link>
                    <Link to='/kitchen'>
                        <li>Kitchen</li>
                    </Link>
                </ul>
            </div>
    </>
   )
}

export default NavBar