import sessionApi from '../api/sessionApi';

export function signUpSuccess() {
  return { type: 'SIGN_UP_SUCCESS' }
}

export function signUpUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      localStorage.setItem('jwt', response.jwt);
      dispatch(signUpSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}
