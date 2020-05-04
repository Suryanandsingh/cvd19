import { NOTIFICATIONS } from "../types"


const initialState = {
    notifications:[]
}

export default (state=initialState, action)=>{
    switch(action.type){
        case NOTIFICATIONS:
            return{
                ...state,
                notifications: action.payload
            }
        default:
            return state;
    }
}