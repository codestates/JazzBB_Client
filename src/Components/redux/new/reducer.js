import { SET_TOKEN, SET_BOSS_DATE, SET_LIST, TYPE_TEXT, MODIFY_SWITCH, SAVE_MY_ID, SET_PEOPLE, SET_SHOW, SET_BOARD } from "./action";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, { user: { ...state.user, token: payload.token } });

    case SET_BOSS_DATE:
      return Object.assign({}, state, { boss: {date : payload.newDate }});

    case SET_LIST:
      return Object.assign({}, state, { [payload.verify]: payload.list });

    case TYPE_TEXT:
        return Object.assign({}, state, { review: { ...state.review, [payload.veriety]:payload.text} });
        
    case MODIFY_SWITCH:
        return Object.assign({}, state, { togle: { ...state.togle, [payload.veriety]: !state.togle[payload.veriety]} });
    
    case SAVE_MY_ID:
        return Object.assign({}, state, { myReviewId: payload.id });

    case SET_SHOW:
        return Object.assign({}, state, { show: payload.show });
    
    case SET_PEOPLE:
        return Object.assign({}, state, { people: payload.people });

    case SET_BOARD:
        return Object.assign({}, state, { currentBoard: payload.board });

    default:
      return state;
  }
};

export default reducer;
