import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';


export function loginSuccess() {
  return { type: type.LOG_IN_SUCCESS }
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      localStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  auth.logOut();
  return { type: type.LOG_OUT }
}
