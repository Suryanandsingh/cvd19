import { DEMOGRAPHICS_DATA } from "../types"


const initialState={
    demographics: []
}

export default (state=initialState, action)=>{
    switch(action.type){
        case DEMOGRAPHICS_DATA:
            return{
                ...state,
                demographics: action.payload
            }
        default:
            return state;
    }
}