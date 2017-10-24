import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>, document.getElementById('root')
)
