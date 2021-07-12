import {
  SET_SHOW_BOSS,
  SET_RESER_BOSS,
  SET_TOKEN,
  SET_BOSS_DATE,
  SET_LIST,
  TYPE_TEXT,
  MODIFY_SWITCH,
  SAVE_MY_ID,
  SET_PEOPLE,
  SET_SHOW,
  SET_BOARD,
  SET_USER,
  MODIFY_USER,
  MODIFY_FINISH,
  DELETE_STATE,
  SET_ALLPAGE,
  CHECK_FIRST,
} from "./action";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        user: { ...state.user, token: payload.token },
      });

    case SET_BOSS_DATE:
      return Object.assign({}, state, { boss: { date: payload.newDate } });

    case SET_RESER_BOSS:
      return Object.assign({}, state, { reservation: payload.list });

    case SET_LIST:
      return Object.assign({}, state, { [payload.verify]: payload.list });

    case TYPE_TEXT:
      return Object.assign({}, state, {
        review: { ...state.review, [payload.variety]: payload.text },
      });

    case MODIFY_SWITCH:
      return Object.assign({}, state, {
        togle: {
          ...state.togle,
          [payload.variety]: !state.togle[payload.variety],
        },
      });

    case SAVE_MY_ID:
      return Object.assign({}, state, { myReviewId: payload.id });

    case SET_SHOW:
      return Object.assign({}, state, { show: payload.show });

    case SET_PEOPLE:
      return Object.assign({}, state, { people: payload.people });

    case SET_BOARD:
        return Object.assign({}, state, { currentBoard: payload.idx});
    
    case SET_USER:
      return Object.assign({}, state, { user: payload.user });

    case MODIFY_USER:
      return Object.assign({}, state, {
        modifyUser: { ...state.modifyUser, [payload.variety]: payload.text },
      });

    case MODIFY_FINISH:
      return Object.assign({}, state, {
        user: { ...state.user, ...state.modifyUser },
      });

    case DELETE_STATE:
      return Object.assign({}, state, { [payload.variety]: null });

    case SET_SHOW_BOSS:
      return Object.assign({}, state, { BossShowList: payload.list });

    case SET_ALLPAGE:
      return Object.assign({}, state, { AllPage: payload.data }); 

    case CHECK_FIRST:
      return Object.assign({}, state, { firstCheck: !state.firstCheck }); 

     
    default:
      return state;
  }
};

export default reducer;
