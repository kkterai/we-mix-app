import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom'
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(thunk)
  ));

store.subscribe(throttle(() => {
  saveState({
    videos: store.getState().videos //confirm that this will preserve data, not ui state 
  });
}, 1000));

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
)
