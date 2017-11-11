import { requestOptions } from '../utils/session';
import axios from 'axios';

require('es6-promise').polyfill();
require('isomorphic-fetch');
require('dotenv').config();


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

export function getUserVideos() {
  const request =  requestOptions({
    method: 'GET'
  });

  return (dispatch) => {
    dispatch({ type: 'LOAD_USER_VIDEOS' });
    return fetch('/api/v1/videos', request)
      .then(response => response.json())
      .then(userVideos => dispatch({ type: 'FETCH_USER_VIDEOS', payload: userVideos }));
  };
}

export function addVideo(video) {
  const request =  requestOptions({
    method: 'POST',
    body: JSON.stringify({ video: video })
  });

  return(dispatch) => {
    dispatch({ type: 'ADD_VIDEO' })

    return fetch('/api/v1/videos', request )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'SUCCESSFULLY_ADDED_VIDEO',
          payload: data
        })
        return data
      })}
  }

  export function deleteVideo(video) {
    debugger
    const id = video.id

    // return (dispatch) => {
    //   dispatch({ type: 'DELETE_VIDEO' }) - deleteVideo function breaks when this is not commented out
    // }

    axios.delete(`http://localhost:3001/api/v1/videos/${id}`, {
      authorization: `${localStorage.token}`,
      body: `${id}`
    })
    .then(response => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
}

export function editVideo(video) {
  debugger
  const id = video.id

  axios.patch(`http://localhost:3001/api/v1/videos/${id}`, video, {
      authorization: `${localStorage.token}`,
      body: `${video}`
    })
    .then(response => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
  }
