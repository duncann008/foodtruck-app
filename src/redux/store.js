import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];



// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas


const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  persistedReducer,
  // rootReducer, 
  // adds all middleware to our project including saga and logger
  applyMiddleware(...middlewareList),
);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga); 

export {store, persistor, sagaMiddleware};


