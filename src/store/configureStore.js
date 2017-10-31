import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
const nextRootReducer = require('../reducer');

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

  if (module.hot) {
    module.hot.accept('../reducer', () => {
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}