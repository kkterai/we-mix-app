export default function userReducer(state = { loading: false, videosById: [] }, action) {

    switch (action.type) {
        case 'LOAD_USER_VIDEOS':
            return Object.assign({}, state, {loading: true })
        case 'FETCH_USER_VIDEOS':
            const videos = action.payload.map ( video => transform(video) )
            return Object.assign({}, { loading: false },{ videosById: videos })
        case 'ADD_VIDEO':
            let v = transform(action.payload)
            return Object.assign({}, state, { videosById: state.videosById.concat(v) })
        case 'DELETE_VIDEO':
            let vids = state.videosById.filter (video => detransform(video).id !== action.payload);
            return Object.assign({}, { loading: false },{ videosById: vids })
        case 'EDIT_VIDEO':
            for (let i = 0; i < state.videosById.length; i++) { 
                if (state.videosById[i][action.payload.id]) {
                    state.videosById[i][action.payload.id] = Object.assign({}, state.videosById[i][action.payload.id], action.payload ) 
                }
            }
            return state
        case 'INCREMENT_LIKE':
            debugger
            return []
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
    o[video.id] = Object.assign(
        {},
        { id: video.id }, 
        { artist: video.artist }, 
        { video_URL: video.video_URL }, 
        { track_title: video.track_title }, 
        { youTubeId: youTubeId },
        { like_count: video.like_count }
    );
    return o;
}

function detransform(video) {
    let videoKey = Object.getOwnPropertyNames(video).toString();
    let vid = video[videoKey] 
    return vid
}