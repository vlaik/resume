import React from 'react';
import Portal from '../PortalInfo/Portal';
import './header.scss';
import HeaderNav from './HeaderNav';
import HeaderText from './HeaderText';


function  Header() {
    return(
        <div className='header'>
            <HeaderNav/>
            <HeaderText/>
            <Portal/>
        </div>
    )
}


export default Header;