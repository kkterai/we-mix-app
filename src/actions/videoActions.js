require('es6-promise').polyfill();
require('isomorphic-fetch');

export function getUserVideos() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_USER_VIDEOS' });
    return fetch('http://localhost:3001/api/v1/videos')
      .then(response => response.json())
      .then(userVideos => dispatch({ type: 'FETCH_USER_VIDEOS', payload: userVideos }));
  };
}

export function searchArtist(name) {
  let artist = name
  return (dispatch) => {
    dispatch({ type: 'SEARCH_ARTIST' });
    return fetch(`http://www.theaudiodb.com/api/v1/json/${REACT_APP_SECRET_CODE}/searchalbum.php?s=${name}`)
        .then(response => response.json())
        .then(musicVideos => dispatch({ type: 'FETCH_MUSIC_VIDEOS', payload: musicVideos }));
    };
}
