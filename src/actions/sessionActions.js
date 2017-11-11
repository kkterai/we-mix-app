import sessionApi from '../api/sessionApi';
import { logOut } from '../utils/authenticator';
import { connect } from 'react-redux';

export function loginSuccess() {
  return { type: 'LOG_IN_SUCCESS' }
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      console.log(response)
      localStorage.setItem('token', response.token);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  logOut();
  return { type: 'LOG_OUT' }
}
