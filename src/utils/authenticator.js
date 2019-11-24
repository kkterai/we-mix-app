export const loggedIn = () => {
    return !!localStorage.token;
  }

export const logOut = (history) => {
    localStorage.clear();
    history.push('/')
  }
