import { LOADER_START, LOADER_STOP, DATA_LOADER_STOP, DATA_LOADER_START } from "../types"


const initialState={
    loader: false,
    dataLoader: false
}

export default (state=initialState, action)=>{
    switch(action.type){
        case LOADER_START:
            return{
                ...state,
                loader: true
            }
        case LOADER_STOP:
            return{
                ...state,
                loader: false
            }
        case DATA_LOADER_START:
            return{
                ...state,
                dataLoader: true
            }
        case DATA_LOADER_STOP:
            return{
                ...state,
                dataLoader: false
            }
        default:
            return state;
    }
}