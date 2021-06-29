import {CHANGE_DATE} from './types'

export const SET_TOKEN = "SET_TOKEN";

export const ChangeDate = () =>{
    return{
        type : CHANGE_DATE
    }
}
export const setToken = (token) => {
    return {
      type: SET_TOKEN,
      payload: {
        token
      }
    }
}