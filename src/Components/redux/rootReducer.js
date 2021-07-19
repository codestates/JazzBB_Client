import {combineReducers} from 'redux'
import reducer from './new/reducer'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
  };
  

const rootReducer = combineReducers({
    reducer
})

// export function* rootSaga() {
//     yield all([dataSaga()]);
//   }

export default persistReducer(persistConfig, rootReducer)