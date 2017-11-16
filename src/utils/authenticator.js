export function loggedIn() {
    return !!localStorage.token;
  }

export function logOut(history) {
    localStorage.clear();
    history.push('/')
  }
