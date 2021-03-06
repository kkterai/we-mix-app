import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App'
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';

import rootReducer from './reducers';

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(thunk)
  ));

store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user 
  });
}, 1000));

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
)
