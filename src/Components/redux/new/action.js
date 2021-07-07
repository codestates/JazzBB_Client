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

export const setList = (list, verify) =>{
    return {
      type : SET_LIST,
      payload : {
        list,
        verify
      }
    }
}

export const typeText = (text, veriety) =>{
    return {
      type : TYPE_TEXT,
      payload : {
        text,
        veriety
      }
    }
}

export const modifySwitch = (veriety) =>{
    return {
      type : MODIFY_SWITCH,
      payload : {
        veriety
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