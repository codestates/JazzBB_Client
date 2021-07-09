export const SET_TOKEN = "SET_TOKEN";
export const SET_BOSS_DATE = "SET_BOSS_DATE"
export const SET_LIST = "SET_LIST"
export const TYPE_TEXT = "TYPE_TEXT"
export const MODIFY_SWITCH = "MODIFY_SWITCH"
export const SAVE_MY_ID = "SAVE_MY_ID"
export const SET_SHOW = "SET_SHOW"
export const SET_PEOPLE = "SET_PEOPLE"
export const SET_BOARD = "SET_BOARD"
export const SET_USER = "SET_USER"
export const MODIFY_USER = "MODIFY_USER"
export const MODIFY_FINISH = "MODIFY_FINISH"
export const DELETE_STATE = "DELETE_STATE"
export const SET_RESER_BOSS = "SET_RESER_BOSS"


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

export const setBossReservationList = (list) =>{
  return{
    type : SET_RESER_BOSS,
    payload : {
      list
    }
  }
}

export const setList = (list, verify) =>{
    return {
      type : SET_LIST,
      payload : {
        list,
        verify
      }
    }
}

export const typeText = (text, variety) =>{
    return {
      type : TYPE_TEXT,
      payload : {
        text,
        variety
      }
    }
}

export const modifySwitch = (variety) =>{
    return {
      type : MODIFY_SWITCH,
      payload : {
        variety
      }
    }
}

export const saveMyId = (id) =>{
    return {
      type : SAVE_MY_ID,
      payload : {
        id
      }
    }
}

export const setShow = (show) =>{
    return {
      type : SET_SHOW,
      payload : {
        show
      }
    }
}

export const setPeople = (people) =>{
    return {
      type : SET_PEOPLE,
      payload : {
        people
      }
    }
}

export const setBoard = (board) =>{
    return {
      type : SET_BOARD,
      payload : {
        board
      }
    }
}

export const setUser = (user) => {
    return {
        type : SET_USER,
        payload : {
            user
        }
    }
}

export const modifyUser = (text, variety) => {
    return {
        type : MODIFY_USER,
        payload : {
            text,
            variety,
        }
    }
}

export const modifyFinish = () => {
  return {
      type : MODIFY_FINISH,
      payload: null,
  }
}

export const deleteState = (variety) => {
  return {
      type : DELETE_STATE,
      payload: {
        variety,
      },
  }
}