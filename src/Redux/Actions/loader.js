import { LOADER_START, LOADER_STOP, DATA_LOADER_STOP, DATA_LOADER_START } from "../types"

export function loaderStart(){
    return dispatch => {
      dispatch({
        type: LOADER_START
      })
    }
}

export function loaderStop(){
  return dispatch => {
    dispatch({
      type: LOADER_STOP
    })
  }
}

export function dataLoaderStart(){
  return dispatch => {
    dispatch({
      type: DATA_LOADER_START
    })
  }
}

export function dataLoaderStop(){
return dispatch => {
  dispatch({
    type: DATA_LOADER_STOP
  })
}
}