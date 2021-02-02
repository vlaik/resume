import React from 'react'
import { connect } from 'react-redux'
import { changeStatus } from '../../Redux/action'
import './header.scss'

function HeaderText(props) {
    const nextStatus = props.newstatus
    if(nextStatus === false){
        return(
            <div className='text'>
                <h1>
                The programmer's hands are fed ... and coffee
                </h1>
                <p>
                Just to be clear, we do this for fun not for you, just kidding.
                </p>
                <button
                onClick={ props.nextStatusPush}
                className='readmore'>READ MORE</button>
            </div>
        )
    }
    else return null;
    
}

const mapStateToProps = (state) =>{
    return{
        newstatus: state.status
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        nextStatusPush: () => dispatch(changeStatus(true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderText);