import { SET_TOKEN, SET_BOSS_DATE } from "./action";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, { user: { ...state.user, payload } });

    case SET_BOSS_DATE:
      return Object.assign({}, state, { boss: {date : payload.newDate }});
    default:
      return state;
  }
};

export default reducer;
