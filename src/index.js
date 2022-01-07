import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, sagaMiddleware } from './redux/store.js';
import App from './components/App/App';
import rootSaga from './redux/sagas/_root.saga';



ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('react-root'),
);
