export default function userReducer(state = { loading: false, videosById: {} }, action) {

    switch (action.type) {
        case 'LOADING_USER_VIDEOS':
            return Object.assign({}, state, {loading: true })
        case 'FETCH_USER_VIDEOS':
            const videos = action.payload.map ( video => transform(video) )
            return Object.assign({}, { loading: false },{ videosById: videos })
        case 'ADD_VIDEO':
            return Object.assign({}, state, { videosById: state.videosById.concat(action.video) })
        case 'DELETE_VIDEO': {
            debugger 
            const videos = state.videosById.filter(video => video.id !== action.id);
            return Object.assign({}, { loading: false },{ videosById: videos })
        }
        default:
            return state;
    }
  };

function transform(video) {
    let o = {};
    let youTubeId;
    if (video.video_URL.match(/youtube/)) {
        youTubeId = video.video_URL.replace(/^[^_]*=/,'')
    } else {
        youTubeId = ""
    }
    o[video.id] = Object.assign({},{id: video.id }, { artist: video.artist }, { video_URL: video.video_URL }, { track_title: video.track_title }, { youTubeId: youTubeId});
    return o;
}

