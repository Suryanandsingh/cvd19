import Axios from "axios"
import { rawUrl } from "../../Utils/urls"
import  { DEMOGRAPHICS_DATA } from '../types';
import { loaderStart, loaderStop } from "./loader";



export function getDemographics(){
    return dispatch => {
        dispatch(loaderStart());
        Axios.get(rawUrl).then(res=>{
            dispatch({
                type: DEMOGRAPHICS_DATA,
                payload: res.data.raw_data.reverse()
            })
            dispatch(loaderStop());
        }).catch(err=>{
            dispatch(loaderStop());
            console.log(err.response)
        })
    }
}