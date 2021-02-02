import React from 'react';
import logoImage from '../../image/logo3.jpg'
import { Link } from 'react-router-dom'
import './header.scss';


function  HeaderNav() {
    return(
        <div className='headernav'>
            <Link to='/'>
            <button>Home</button>
            </Link>
            <Link to='aboutme'>
            <button>About Me</button>
            </Link>
            
            <img className='logo' src={logoImage} alt=""/>
            <Link to='skills'>
            <button>Skills</button>
            </Link>
            
            <button>Contact Us</button>
        </div>
    )
}


export default HeaderNav;