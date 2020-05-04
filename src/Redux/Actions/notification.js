import Axios from "axios"
import { notifUrl } from "../../Utils/urls"
import { NOTIFICATIONS } from "../types"
import { loaderStart, loaderStop } from './loader';


export function getNotifications(){
    return dispatch => {
        dispatch(loaderStart());
        Axios.get(notifUrl).then(res=>{
            dispatch({
                type: NOTIFICATIONS,
                payload: res.data.reverse()
            })
            dispatch(loaderStop());
        }).catch(err=>{
            dispatch(loaderStop());
            console.log(err.response)
        })
    }
}