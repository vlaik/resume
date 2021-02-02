import React from 'react';
import ReactDom from "react-dom";
import { connect } from 'react-redux';
import { changeStatus } from '../../Redux/action';
import ReduxImg from '../../image/redux.png';
import SassIng from '../../image/sass.png';
import Fade from 'react-reveal/Fade';
import './portal.scss'


function Portal(props) {
    const statusPortal = props.visionPortal;
    if(statusPortal === true){
        return(
           <div className='backportal'>
            {ReactDom.createPortal(
               <Fade top><div className='over'>
                <div className="style-modal">
                  <h2 className="addcitys">In this application i used technologies redux/react-redux, scss preprocessor<br/>
                  and many others, these are the main.
                  </h2>
                  <img className='redux-png' src={ ReduxImg } alt=""/>
                  <img className='sass-png' src={ SassIng } alt=""/>
                  <button
                  onClick={props.closePortal}
                  className="close" >
                    X
                  </button>
                  
                </div>
                </div></Fade> ,
              document.getElementById("portal")
            )}
          </div>
        )
    }
    
    else return null;
    
}

const mapStateToProps = (state) =>{
    return{
        visionPortal: state.status
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        closePortal: () => dispatch(changeStatus(false))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Portal);