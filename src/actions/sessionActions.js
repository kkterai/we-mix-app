import sessionApi from '../api/sessionApi';
import Auth from '../utils/authenticator';

export function loginSuccess() {
  return { type: 'LOG_IN_SUCCESS' }
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      console.log(response)
      localStorage.setItem('jwt', response.token);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  Auth.logOut();
  return { type: 'LOG_OUT' }
}
