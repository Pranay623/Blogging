import React from 'react'
import './Header.css'
import mygif from '../header/newgif.gif';

export const Header = () => {
  return (
    <div className="container">
        <div className="logo">
        <img src={mygif} alt='logo' className='gif'/>
        <span>WordSpree</span>
        </div>

        <div className="right">
            <div className="menu">
                <ul class="head">
                    <li><a href='#hero'>Home</a></li>
                    <li>Popular Blogs</li>
                    <li><button className='button'>Contact Us</button></li>
                    <li><button className='button'>Sign Up</button></li>
                </ul>
            </div>
        </div>

        <input type="text" className="search" placeholder='Search here....'/>
        
    </div>
  )
}

export default Header

