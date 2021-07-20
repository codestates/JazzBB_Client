import {  SET_TOKEN, SET_USER, IS_LOGIN, FINISH_ACTION,} from "./action";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {

    case SET_TOKEN:
      return Object.assign({}, state, {
        token: payload.token ,
      });

    case SET_USER:
      return Object.assign({}, state, { user: payload.user });
    
    case IS_LOGIN:
      return Object.assign({}, state, { isLogin: !state.isLogin });

    case FINISH_ACTION:
      console.log('finish_Action ')
      return Object.assign({}, state, { codeAction: true });

    default:
      return state;
  }

}


export default reducer;