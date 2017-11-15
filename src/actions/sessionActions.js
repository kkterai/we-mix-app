import sessionApi from '../api/sessionApi';
import { logOut } from '../utils/authenticator';


export function loginUser(credentials, history, redirect) {
  return function(dispatch) {
    return sessionApi.login(credentials)
    .then(response => {
      console.log(response)
      localStorage.setItem('token', response.token);
    })
    .catch(error => {
      throw(error);
    })
    .then(history.push(redirect));
  };
}

export function logOutUser() {
  logOut();
}
