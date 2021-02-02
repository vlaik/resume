import React from 'react'
import MinyBar from './MinyBar/MinyBar';
import './myskills.scss'
import { connect } from 'react-redux'
import { changeStatus } from '../Redux/action'


function SkillsLevel(props) {
    return(
        <div className='mainSkill'>
            <MinyBar/>
            <div className='skillMenuOpen'>
            <button
            onClick={props.nextStatusPush}
            >SKILLS</button>
            <p>Progress bars.</p>
            </div>

            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        nextStatusPush: () => dispatch(changeStatus(true))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SkillsLevel);