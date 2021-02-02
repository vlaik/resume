import Fade from 'react-reveal/Fade';
import './minybar.scss'
import { connect } from 'react-redux'


function MinyBar(props) {
    const menuList = props.statusMenu;
    if(menuList === true){
        return(
            <Fade left>
            <div className='invismenu'>
                <h3>HTML</h3>
                <hr/>
                <h3>CSS</h3>
                <hr/>
                <h3>JavaScript</h3>
                <hr className="jslvl"/>
            </div>
            </Fade>
        )
    }
    else return null;
    
    
}

const mapStateToProps = (state) =>{
    return{
        statusMenu: state.status
    }
}

export default connect(mapStateToProps)(MinyBar);