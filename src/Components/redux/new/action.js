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
export const SET_SHOW_BOSS = "SET_SHOW_BOSS"
export const SET_ALLPAGE = "SET_ALLPAGE"
export const SET_JAZZBAR = "SET_JAZZBAR"
export const SET_BOSS_JAZZBAR = "SET_BOSS_JAZZBAR"
export const CHECK_FIRST = "CHECK_FIRST"
export const SAVE_THIS_HISTORY = "SAVE_THIS_HISTORY"
export const DEQUEUE_HISTORY = "DEQUEUE_HISTORY"
export const SEARCH = "SEARCH"
export const SELECT_SEARCH_TYPE = "SELECT_SEARCH_TYPE"
export const SAVE_SEARCH_DATA = "SAVE_SEARCH_DATA"
export const IS_LOGIN = "IS_LOGIN"
export const ADD_EVERY_SHOW_LIST = "ADD_EVERY_SHOW_LIST"
export const SET_JAZZID_BOSS = "SET_JAZZID_BOSS"
export const FINISH_ACTION = "FINISH_ACTION"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"


export const setJazzId = (id) => {
  return {
    type: SET_JAZZID_BOSS,
    payload: {
      id
    }
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

export const setBossDate = (newDate) =>{
  return{
    type : SET_BOSS_DATE,
    payload : {
      newDate
    }
  }
}

export const setBossJazzBar = (list) =>{
  return{
    type : SET_BOSS_JAZZBAR,
    payload : {
      list
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

export const setBossShowList = (list) =>{
  return{
    type : SET_SHOW_BOSS,
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

export const setBoard = (idx) =>{
    return {
      type : SET_BOARD,
      payload : {
        idx
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

export const setAllPage = (data) => {
  return {
    type: SET_ALLPAGE,
    payload: {
      data
    }
  }
}

export const checkFirst = () => {
  return {
    type: CHECK_FIRST,
    payload: null
  }
}

export const dequeueHistory = () => {
  return {
    type: DEQUEUE_HISTORY,
    payload: null
  }
}



export const saveThisHistory = (history) => {
  return {
    type: SAVE_THIS_HISTORY,
    payload: {
      history
    }
  }
}

export const search = (text) => {
  return {
    type: SEARCH,
    payload: {
      text
    }
  }
}

export const selectSearchType = (type) => {
  return {
    type: SELECT_SEARCH_TYPE,
    payload: {
      type
    }
  }
}

export const saveSearchData = (data) => {
  return {
    type: SAVE_SEARCH_DATA,
    payload: {
      data
    }
  }
}

export const setJazzbar = (bar) => {
  return {
    type: SET_JAZZBAR,
    payload: {
      bar
    }
  }
}

export const isLogin = () => {
  return {
    type: IS_LOGIN,
    payload: null
  }
}

export const addEveryShowList = (list) => {
  return {
    type: ADD_EVERY_SHOW_LIST,
    payload: {
      list
    }
  }
}

export const finishAction = () => {
  return {
    type: FINISH_ACTION,
    payload: null,
  }
}

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      page
    },
  }
}