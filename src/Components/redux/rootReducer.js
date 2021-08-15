import {combineReducers} from 'redux'
import reducer from './new/reducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ["reducer"],
  timeout: null,
};

const rootReducer = combineReducers({
    reducer:reducer,
})


export default persistReducer(persistConfig, rootReducer)
// export default rootReducer