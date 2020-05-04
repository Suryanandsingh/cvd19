import { ALL_DATA, STATE_DIST_DATA, STATE_TESTED_DATA } from "../types"


const initialState={
    allStateWise: [],
    allTested:[],
    stateDist:[],
    stateTested:[]
}

export default (state=initialState, action) => {
    switch(action.type){
        case ALL_DATA:
            return{
                ...state,
                allStateWise: action.statewise,
                allTested: action.tested
            }
        case STATE_DIST_DATA:
            return {
                ...state,
                stateDist: action.payload
            }
        case STATE_TESTED_DATA:
            return{
                ...state,
                stateTested: action.payload
            }
        default:
            return state;
    }
}