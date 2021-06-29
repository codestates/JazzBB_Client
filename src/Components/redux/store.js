// import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
// import logger from 'redux-logger'
// import {composeWithDevTools} from 'redux-devtools-extension'

// const middleware = [logger]

// const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(...middleware)))

// export default store



import { compose, createStore, applyMiddleware } from "redux";
// import rootReducer from '../reducers/index';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;