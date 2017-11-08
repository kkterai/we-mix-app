import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import routes from './routes';
import { loadState, saveState } from './localStorage';

import rootReducer from './reducers';

import './index.css';

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
    <Router history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('root')
)
