import Axios from "axios"
import { zoneUrl } from "../../Utils/urls"
import { ZONE } from "../types"
import { loaderStart, loaderStop } from './loader';


export function getZone(){
    return dispatch => {
        dispatch(loaderStart());
        Axios.get(zoneUrl).then(res=>{
            dispatch({
                type: ZONE,
                payload: res.data.zones
            })
            dispatch(loaderStop());
        }).catch(err=>{
            dispatch(loaderStop());
            console.log(err.response)
        })
    }
}