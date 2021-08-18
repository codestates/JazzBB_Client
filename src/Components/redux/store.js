import rootReducer from './rootReducer'
import { persistStore } from 'redux-persist';
// import {composeWithDevTools} from 'redux-devtools-extension'
// const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(...middleware)))
// export default store

import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const middleware = [thunk]
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
export default { store, persistor };