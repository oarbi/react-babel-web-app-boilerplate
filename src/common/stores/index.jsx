import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '#/common/reducers';

function configureStoreProd(initialState) {
  return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));
}

function configureStoreDev(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
