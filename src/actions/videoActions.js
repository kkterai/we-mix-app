require('es6-promise').polyfill();
require('isomorphic-fetch');

export function getUserVideos() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_USER_VIDEOS' });
    return fetch('http://localhost:3001/api/v1/videos')
      .then(response => response.json())
      .then(videos => dispatch({ type: 'FETCH_USER_VIDEOS', payload: videos }));
  };
}
