import Axios from 'axios';
import { dataUrl, stateDistUrl, stateTestUrl } from '../../Utils/urls';
import { ALL_DATA, ALL_TESTED_DATA, STATE_DIST_DATA, STATE_TESTED_DATA } from '../types';
import { loaderStart, loaderStop, dataLoaderStart, dataLoaderStop } from './loader';
import { compareValues } from '../../Utils/custom';

export function getAllDetails(){
    return dispatch => {
        dispatch(loaderStart());
        Axios.get(dataUrl).then(res=>{
            dispatch({
                type: ALL_DATA,
                statewise: res.data.statewise,
                tested: res.data.tested.reverse(),
            })
        dispatch(loaderStop());
        }).catch(err=>{
            dispatch(loaderStop());
            console.log(err.response);
        })
    }
}

export function getStateDistDetails(state){
    return dispatch => {
        dispatch(loaderStart());
        Axios.get(stateDistUrl).then(res=>{
            dispatch({
                type: STATE_DIST_DATA,
                payload: res.data[state]['districtData']
            })
            dispatch(loaderStop());
        }).catch(err=>{
            dispatch(loaderStop());
            console.log(err.response)
        })
    }
}

export function getStateTestedDetails(){
    return dispatch => {
        dispatch(dataLoaderStart());
        Axios.get(stateTestUrl).then(res=>{
            dispatch({
                type: STATE_TESTED_DATA,
                payload: res.data.states_tested_data
            })
            dispatch(dataLoaderStop());
        }).catch(err=>{
            dispatch(dataLoaderStop());
            console.log(err.response)
        })
    }
}

export function getAllTestedDetails(){
    return dispatch => {
        Axios.get(dataUrl).then(res=>{
            dispatch({
                type: ALL_TESTED_DATA,
                payload: res.data.tested
            })
        }).catch(err=>{
            console.log(err.response)
        })
    }
}