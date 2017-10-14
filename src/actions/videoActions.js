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
  const key = process.env.REACT_APP_KEY
  const id = process.env.REACT_APP_ID
  const corsURL = 'https://cors-anywhere.herokuapp.com/'
  let artist = name
  return (dispatch) => {
    dispatch({ type: 'SEARCH_ARTIST_VIDEOS' });
    return fetch(`${corsURL}https://music-api.musikki.com/v1/artists?q=[artist-name:${artist}]&appkey=${key}&appid=${id}`)
        .then(response => response.json())
        .then(artist => dispatch({ type: 'FETCH_ARTIST_VIDEOS', payload: artist }));
    };
}
