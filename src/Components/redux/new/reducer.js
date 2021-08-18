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
  SET_JAZZBAR,
  SET_BOSS_JAZZBAR,
  CHECK_FIRST,
  SAVE_THIS_HISTORY,
  DEQUEUE_HISTORY,
  SEARCH,
  SELECT_SEARCH_TYPE,
  SAVE_SEARCH_DATA,
  IS_LOGIN,
  ADD_EVERY_SHOW_LIST,
  SET_JAZZID_BOSS,
  FINISH_ACTION,
  SET_CURRENT_PAGE,
  RESET,
  SET_BOSS_MENU
} from "./action";
import initialState from "./initialState";
import ResetState from './ResetState'

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {

    case SET_JAZZID_BOSS:
      return Object.assign({}, state, {
        jazzBarId: payload.id },
      );

      case SET_BOSS_MENU:
        return Object.assign({}, state, {
          menu: payload.id },
        );

    case SET_TOKEN:
      return Object.assign({}, state, {
        token: payload.token ,
      });

    case SET_BOSS_DATE:
      return Object.assign({}, state, { boss: { date: payload.newDate } });

    case SET_BOSS_JAZZBAR:
      return Object.assign({}, state, { jazzbar: payload.list });


    case SET_RESER_BOSS:
      return Object.assign({}, state, { bossReservation: payload.list });

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
      return Object.assign({}, state, { currentBoard: payload.idx });

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

    case SAVE_THIS_HISTORY:
      return Object.assign({}, state, { history: [state.currentPage, ...state.history] });

    case DEQUEUE_HISTORY:
      return Object.assign({}, state, { history: state.history.slice(1) });

    case SEARCH:
      return Object.assign({}, state, { search: payload.text });

    case SELECT_SEARCH_TYPE:
      return Object.assign({}, state, { searchOption: payload.type });

    case SAVE_SEARCH_DATA:
      return Object.assign({}, state, { searchData: payload.data });

    case SET_JAZZBAR:
      return Object.assign({}, state, { currentJazzbar: payload.bar });

    case IS_LOGIN:
      return Object.assign({}, state, { isLogin: !state.isLogin });

    case ADD_EVERY_SHOW_LIST:
      return Object.assign({}, state, { everyShowList: [...payload.list] });

    case FINISH_ACTION:
      return Object.assign({}, state, { codeAction: true });

    case SET_CURRENT_PAGE:
      return Object.assign({}, state, { currentPage: payload.page });


    // case SAVE_REDUCER:
    //   return Object.assign({}, state, { isLogin: payload.login, codeAction: payload.codeAction, user: payload.user, token: payload.token });
    case RESET:
      return Object.assign({}, ResetState);
    

    default:
      return state;
  }
};

export default reducer;
