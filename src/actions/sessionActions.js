import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';

// example ref: sbenedetto


export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      debugger
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  auth.logOut();
  return {type: types.LOG_OUT}
}
