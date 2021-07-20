import {combineReducers} from 'redux'
import reducer from './new/reducer'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import oauthReducer from "./new/oauthReducer"

const persistConfig = {
    key: "root",
    storage: storage,
    blackList:["reducer"]
  };
  

const rootReducer = combineReducers({
    reducer,
    oauthReducer
})

// export function* rootSaga() {
//     yield all([dataSaga()]);
//   }

export default persistReducer(persistConfig, rootReducer)