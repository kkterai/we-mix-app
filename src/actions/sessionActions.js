import sessionApi from '../api/sessionApi';
import { logOut } from '../utils/authenticator';
import { requestOptions } from '../utils/session';

require('es6-promise').polyfill();
require('isomorphic-fetch');


export function loginUser(credentials, history, redirect) {
  const request =  requestOptions({
    method: 'GET'
  });

  return function(dispatch) {
    return sessionApi.login(credentials)
    .then(response => {
      if (localStorage.setItem('token', response.token)) {
        dispatch({ type: 'LOAD_USER_VIDEOS' });
        return fetch('/api/v1/videos', request)
          .then(response => response.json())
          .then(userVideos => dispatch({ type: 'FETCH_USER_VIDEOS', payload: userVideos }))
        };
      }
    )
    .catch(error => {
      throw(error);
    })
    .then(history.push(redirect));
  };
}

export function logOutUser() {
  logOut();
}
