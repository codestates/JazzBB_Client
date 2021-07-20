import rootReducer from './rootReducer'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { compose, createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(...middleware)))
// export default store


const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };

// import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//   : compose;
// const middleware = [logger, thunk]
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
// export default store;
