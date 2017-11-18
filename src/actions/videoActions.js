import { requestOptions } from '../utils/session';

require('es6-promise').polyfill();
require('isomorphic-fetch');


// AudioDB actions

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
    return fetch(`${corsURL}http://www.theaudiodb.com/api/v1/json/1/mvid.php?i=${artistId}`)
        .then(response => response.json())
        .then(album => dispatch({ type: 'FETCH_ALBUM_VIDEOS', payload: album , id: albumId }))
        .then(history.push(redirect));
    };
}

// We/Mix API Actions

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
    return fetch('/api/v1/videos', request )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'ADD_VIDEO',
          payload: data
        })
        console.log(data)
        return data
      })}
  }

  export function deleteVideo(videoId) {
    const request =  requestOptions({
      method: 'DELETE',
      body: JSON.stringify({ id: videoId })
    });

    return(dispatch) => {
      return fetch(`/api/v1/videos/${videoId}`, request)
      .then(response => {
        if (response.ok) {
          dispatch({ 
            type: 'DELETE_VIDEO',
            payload: videoId })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}

export function editVideo(video) {
  const request = requestOptions({
    method: 'PATCH',
    body: JSON.stringify({ video: video })
  });

  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/videos/${video.id}`, request)
    .then(response => {
      if (response.ok) {
        dispatch({ 
          type: 'EDIT_VIDEO',
          payload: video })
      }
      return video
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export function likeButton(video) {
  debugger
  // const request = requestOptions({
  //   method: 'PATCH',
  //   body: JSON.stringify({ video: video })
  // });

  // return dispatch => {
  //   return fetch(`http://localhost:3001/api/v1/videos/${video.id}`, request)
  //   .then(response => {
  //     if (response.ok) {
  //       dispatch({ 
  //         type: 'EDIT_VIDEO',
  //         payload: video })
  //     }
  //     return video
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
}