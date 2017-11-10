import userApi from '../api/userApi';

export function signUpSuccess() {
  return { type: 'SIGN_UP_SUCCESS' }
}

export function signUpUser(user) {
  return function(dispatch) {
    return userApi.signup(user).then(response => {
      localStorage.setItem('token', response.token);
      dispatch(signUpSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}
