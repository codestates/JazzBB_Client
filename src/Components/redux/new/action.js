export const SET_TOKEN = "SET_TOKEN";
export const SET_SHOW_LIST = "SET_SHOW_LIST"
export const SET_BAR_LIST = "SET_BAR_LIST"
export const SET_MENU_LIST = "SET_MENU_LIST"
export const SET_PHOTO_LIST = "SET_PHOTO_LIST"
export const SET_BOSS_SHOW_LIST = "SET_BOSS_SHOW_LIST"
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

export const setShowList = (list) =>{
    return {
      type : SET_SHOW_LIST,
      payload : {
        list
      }
    }
}

export const setBarList = (list) =>{
    return {
      type : SET_BAR_LIST,
      payload : {
        list
      }
    }
}

export const setMenuList = (list) =>{
    return {
      type : SET_MENU_LIST,
      payload : {
        list
      }
    }
}

export const setPhotoList = (list) =>{
    return {
      type : SET_PHOTO_LIST,
      payload : {
        list
      }
    }
}

export const setBossShowlist = (list) =>{
  return{
    type : SET_BOSS_SHOW_LIST,
    payload : {
      list
    }
  }
}