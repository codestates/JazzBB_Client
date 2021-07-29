import {combineReducers} from 'redux'
import reducer from './new/reducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    reducer
})

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ["reducer"],
  timeout: null,
};

export default persistReducer(persistConfig, rootReducer)
// export default rootReducer