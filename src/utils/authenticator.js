import React from 'react';

class Auth {
  static loggedIn() {
    return !!localStorage.token;
  }

  static logOut() {
    localStorage.clear();
  }
}

export default Auth;