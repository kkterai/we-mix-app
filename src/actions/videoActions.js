require('es6-promise').polyfill();
require('isomorphic-fetch');

export function getUserVideos() {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'http://localhost:3000/api/v1/videos';
  return (dispatch) => {
    dispatch({ type: 'LOAD_USER_VIDEOS' });
    return fetch(proxyurl + url)
      .then(response => response.json())
      .then(videos => dispatch({ type: 'FETCH_USER_VIDEOS', payload: videos }));
  };
}
