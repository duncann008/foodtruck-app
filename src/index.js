import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, sagaMiddleware } from './redux/store.js';
import App from './components/App/App';
import rootSaga from './redux/sagas/_root.saga';

sagaMiddleware.run(rootSaga); 

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('react-root'),
);
