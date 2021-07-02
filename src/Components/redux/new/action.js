export const SET_TOKEN = "SET_TOKEN";
<<<<<<< HEAD
export const SET_SHOW_LIST = "SET_SHOW_LIST"
export const SET_BAR_LIST = "SET_BAR_LIST"
export const SET_MENU_LIST = "SET_MENU_LIST"
export const SET_PHOTO_LIST = "SET_PHOTO_LIST"
export const SET_BOSS_DATE = "SET_BOSS_DATE"
=======
export const SET_BOSS_DATE = "SET_BOSS_DATE"
export const SET_LIST = "SET_LIST"
export const TYPE_TEXT = "TYPE_TEXT"
export const MODIFY_SWITCH = "MODIFY_SWITCH"
export const SAVE_MY_ID = "SAVE_MY_ID"
export const SET_SHOW = "SET_SHOW"

>>>>>>> b572bae23b942fc5dad48542aecabd60a82597b2


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

<<<<<<< HEAD
=======
export const setShow = (show) =>{
    return {
      type : SET_SHOW,
      payload : {
        show
      }
    }
}
>>>>>>> b572bae23b942fc5dad48542aecabd60a82597b2
