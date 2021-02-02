export const SWITCH_STATUS = "SWITCH_STATUS";



export const changeStatus = (nextStatus) =>{
    return{
        type: SWITCH_STATUS,
        payload: nextStatus
    }
}