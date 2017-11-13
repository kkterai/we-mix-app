import sessionApi from '../api/sessionApi';
import { logOut } from '../utils/authenticator';
import createHistory from 'history/createBrowserHistory'


export function loginSuccess() {
  return { type: 'LOG_IN_SUCCESS' }
}

export function loginUser(credentials, history, redirect) {
  return function(dispatch) {
    return sessionApi.login(credentials)
    .then(response => {
      console.log(response)
      localStorage.setItem('token', response.token);
      dispatch(loginSuccess());
    })
    .catch(error => {
      throw(error);
    })
    .then(history.push(redirect));
  };
}

export function logOutUser() {
  logOut();
  return { type: 'LOG_OUT' }
}
