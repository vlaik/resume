import React from 'react'
import Fade from 'react-reveal/Fade';
import './maincontent.scss'


function TextContent() {
    return(
        <div className='textContent'>
            <h1>2019</h1>
            <Fade left>
            <p>Training at the MyIT web development school.</p>
            </Fade>
            <h1 className='info'>2020</h1>
            <Fade right>
            <p className='info'>End of web development school, self-study.</p>
            </Fade>
            <h1 className='info2'>2021</h1>
            <Fade left>
            <p className='tex'>Repetition and job search.</p>
            </Fade>
        </div>
    )
}

export default TextContent;