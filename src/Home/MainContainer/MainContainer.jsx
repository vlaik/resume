import React from 'react'
import "./maincontent.scss"
import CityImg from '../../image/doma.png'
import Line from '../../image/mainline.png'
import First from '../../image/first.png'
import Second from '../../image/two.png'
import TextContent from './TextContent'

function MainContainer() {
    return(
        <div className='main'>
            <img 
            className='city'
            src={ CityImg } 
            alt=""/>

            <img 
            className='line' 
            src={ Line } 
            alt=""/>

            <img 
            className='first'
            src={ First } 
            alt=""/>

            <img 
            className='two'
            src={ First } 
            alt=""/>

            <img 
            className='sec'
            src={ Second }
             alt=""/>

            <TextContent/>


        </div>
    )
};


export default MainContainer;