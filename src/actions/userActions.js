import userApi from '../api/userApi';

export const signUpUser = (user) => {
  return function(dispatch) {
    return userApi.signup(user).then(response => {
      localStorage.setItem('token', response.token);
    }).catch(error => {
      throw(error);
    });
  };
}
