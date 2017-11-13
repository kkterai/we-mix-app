import createHistory from 'history/createBrowserHistory'

export function loggedIn() {
    return !!localStorage.token;
  }

export function logOut() {
    localStorage.clear();
  }
