import React from 'react'
import Ears from '../../image/ears.png'
import { Parallax } from 'react-scroll-parallax'
import './aboutme.scss'
import { Link} from "react-scroll";
import MyInfo from '../MyInfo/MyInfo';
import Resume from '../MyInfo/Resume';

function AboutMeInfo() {
    return(
        <div className='contents'>
            <Parallax className = " custom-class " y = { [ - 20 , 20 ] }>
            <img 
            src={ Ears } 
            alt=""/>
            </Parallax>
            
            <h1 className='names'>Hello my name is Vlad</h1>
            <Link
                activeClass="active"
                 to="testsx"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
               ><button className='scroll'>My resume</button></Link>
            
            <div className='testsx'>
                <MyInfo/>
                <Resume/>
            </div>
        </div>
    )
}


export default AboutMeInfo;