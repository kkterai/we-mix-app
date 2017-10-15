require('es6-promise').polyfill();
require('isomorphic-fetch');
require('dotenv').config()

export function getUserVideos() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_USER_VIDEOS' });
    return fetch('http://localhost:3001/api/v1/videos')
      .then(response => response.json())
      .then(userVideos => dispatch({ type: 'FETCH_USER_VIDEOS', payload: userVideos }));
  };
}

export function searchArtist(name) {
  const secret = process.env.REACT_APP_SECRET_CODE
  const corsURL = 'https://cors-anywhere.herokuapp.com/'
  return (dispatch) => {
    dispatch({ type: 'SEARCH_ARTIST_VIDEOS' });
    return fetch(`${corsURL}http://www.theaudiodb.com/api/v1/json/${secret}/searchalbum.php?s=${name}`)
        .then(response => response.json())
        .then(artist => dispatch({ type: 'FETCH_ARTIST_VIDEOS', payload: artist }));
    };
}
