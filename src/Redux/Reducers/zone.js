import { ZONE } from "../types"


const initialState = {
    zone:[]
}

export default (state=initialState, action)=>{
    switch(action.type){
        case ZONE:
            return{
                ...state,
                zone: action.payload
            }
        default:
            return state;
    }
}