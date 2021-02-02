import React from 'react'
import HtmlSkill from '../../image/html.png'
import CssSkill from '../../image/css.png'
import ReactSkill from '../../image/react.png'
import GitSkill from '../../image/git.png'
import './skills.scss'

function Skills() {
    return(
        <div className='skills'>
            <h1 className='stats'>My basic skills</h1>
            
            <img 
            className='htm'
            src={ HtmlSkill } 
            alt=""/>
            <h1>HTML</h1>
            
            <img 
            className='css'
            src={ CssSkill } 
            alt=""/>
            <h1 className='csss'>CSS/SCSS</h1>

            <img 
            className='react'
            src={ ReactSkill} 
            alt=""/>
            <h1 className='reacts'>REACT/REDUX</h1>

            <img 
            className='git'
            src={ GitSkill} 
            alt=""/>
        </div>
    )
}


export default Skills;