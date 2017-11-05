require('es6-promise').polyfill();
require('isomorphic-fetch');
require('dotenv').config()

export function getUserVideos() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_USER_VIDEOS' });
    return fetch('/api/v1/videos')
      .then(response => response.json())
      .then(userVideos => dispatch({ type: 'FETCH_USER_VIDEOS', payload: userVideos }));
  };
}

export function getYouTubeIds(videos) {
  
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

export const addVideo = video => {
  return {
    type: 'ADD_VIDEO',
    video: Object.assign({}, video )
  }
}


// export function addVideo(video, history) {
//   const videoAttributes = processVideoForApi(video);

//   return(dispatch) => {
//     const options = requestOptions({
//       method: 'POST',
//       body: JSON.stringify({
//         video: videoAttributes,
//       }),
//     });

//     dispatch({ type: 'ADD_VIDEO' });

//     return fetch('/api/v1/videos', options)
//       .then(handleErrors)
//       .then(response => response.json())
//       .then(videos => {
//         dispatch({
//           type: 'SUCCESSFULLY_CREATED_VIDEO',
//           payload: videos.video,
//         })
//         return videos;
//       })
//       .then(videos => history.push(`/videos/${videos.video.id}`))
//       .catch((error) => {
//         dispatch({
//           type: 'UNSUCCESSFULLY_CREATED_VIDEO',
//           payload: "Your video could not be created!",
//         })
//       });
//   }
// }
