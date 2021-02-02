import { SWITCH_STATUS } from './action'


export const initialState = {
    status: false
}


export default function reduser(state = initialState, { type, payload}) {
    switch (type) {
        case SWITCH_STATUS:
            return{
                ...state,
                status: payload
            }
            
    
        default:
            return{
                ...state
            }
    }
}