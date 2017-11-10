import { requestOptions } from '../utils/session';

require('es6-promise').polyfill();
require('isomorphic-fetch');
require('dotenv').config();

export const headers = () => {
  
  const token = localStorage.getItem('jwt');

  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${token}`,
  }
}

export function getUserVideos() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_USER_VIDEOS' });
    return fetch('/api/v1/videos', {
      method: 'GET', 
      headers: headers()
  })
      .then(response => response.json())
      .then(userVideos => dispatch({ type: 'FETCH_USER_VIDEOS', payload: userVideos }));
  };
}

export function searchArtist(name, history, redirect) {
  const corsURL = 'https://cors-anywhere.herokuapp.com/'
  return (dispatch) => {
    dispatch({ type: 'SEARCH_ARTIST_ALBUMS' });
    return fetch(`${corsURL}http://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${name}`)
        .then(response => response.json())
        .then(artist => dispatch({ type: 'FETCH_ARTIST_ALBUMS', payload: artist }))
        .then(history.push(redirect));
    };
}

export function searchAlbum(artistId, albumId, history, redirect) {
  const corsURL = 'https://cors-anywhere.herokuapp.com/'
  return (dispatch) => {
    dispatch({ type: 'SEARCH_ALBUM_VIDEOS' });
    return fetch(`${corsURL}http://www.theaudiodb.com/api/v1/json/195003/mvid.php?i=${artistId}`)
        .then(response => response.json())
        .then(album => dispatch({ type: 'FETCH_ALBUM_VIDEOS', payload: album , id: albumId }))
        .then(history.push(redirect));
    };
}

export function deleteVideo(id) {
  return(dispatch) => {
  
    dispatch({ type: 'DELETING_VIDEO' });

    return fetch(`/api/v1/videos/${id}`, {
      method: 'post',
      headers : new Headers(),
      body: JSON.stringify(id)
    }
  )
      .then(dispatch({ type: 'DELETE_VIDEO' }))
      .catch((error) => { dispatch({ type: 'UNSUCCESSFUL_DELETE' })})
  };
}

export function addVideo(video) {
  debugger
  const request =  requestOptions({
    method: 'post',
    body: JSON.stringify({ video: video })
  });

  return(dispatch) => {
    
    dispatch({ type: 'ADD_VIDEO' })

  return fetch('/api/v1/videos', request )
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch({
        type: 'SUCCESSFULLY_ADDED_VIDEO',
        payload: data
      })
      return data
    })}
  }