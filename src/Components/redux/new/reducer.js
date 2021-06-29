import { SET_TOKEN } from './action';
import initialState from './initialState'

const reducer = (state=initialState, action) => {
    const payload = action.payload;
    switch(action.type){
        case SET_TOKEN:
            return Object.assign({}, state, {user: {...state.user, payload}})
        default : return state;
    }
}

   export default reducer;