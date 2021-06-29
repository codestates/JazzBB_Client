export const SET_TOKEN = "SET_TOKEN";
export const SET_BOSS_DATE = "SET_BOSS_DATE"

export const setToken = (token) => {
    return {
      type: SET_TOKEN,
      payload: {
        token
      }
    }
}

export const setBossDate = (newDate) =>{
  return{
    type : SET_BOSS_DATE,
    payload : {
      newDate
    }
  }
}

