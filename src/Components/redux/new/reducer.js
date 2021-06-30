import {
  SET_TOKEN,
  SET_BOSS_DATE,
  SET_SHOW_LIST,
  SET_BAR_LIST,
  SET_MENU_LIST,
  SET_PHOTO_LIST,
  SET_BOSS_SHOW_LIST
} from "./action";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, { user: { ...state.user, payload } });

    case SET_SHOW_LIST:
      return Object.assign({}, state, { showList: payload });

    case SET_BAR_LIST:
      return Object.assign({}, state, { barList: payload });

    case SET_MENU_LIST:
      return Object.assign({}, state, { menu: payload });

    case SET_PHOTO_LIST:
      return Object.assign({}, state, { barPhoto: payload });

    // case SET_BOSS_SHOW_LIST:
    //   return Object.assign({}, state, { barPhoto: payload });

    case SET_BOSS_DATE:
      return Object.assign({}, state, { boss: { date: payload.newDate } });

    default:
      return state;
  }
};

export default reducer;
