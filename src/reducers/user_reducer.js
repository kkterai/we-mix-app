export default function userReducer(state = { loading: false, videosById: [] }, action) {

    switch (action.type) {
        case 'LOAD_USER_VIDEOS':
            return { ...state, loading: true }
        case 'FETCH_USER_VIDEOS':
            const videos = action.payload.map ( video => transform(video) )
            return { ...state, loading: false, videosById: videos }
        case 'ADD_VIDEO':
            let v = transform(action.payload)
            return { ...state, videosById: state.videosById.concat(v) }
        case 'DELETE_VIDEO':
            let vids = state.videosById.filter (video => detransform(video).id !== action.payload);
            return { ...state, loading: false, videosById: vids }
        case 'EDIT_VIDEO':
            for (let i = 0; i < state.videosById.length; i++) { 
                let currentVideo = state.videosById[i][action.payload.id];
                if (currentVideo) {
                    state.videosById[i][action.payload.id] = Object.assign({}, currentVideo, action.payload )
                }
                // Refactor for immutability
            }
            return state;
        default:
            return state;
    }
  };

const transform = video => {
    const obj = {};
    let youTubeId;
    if (video.video_URL.match(/youtube/)) {
        youTubeId = video.video_URL.replace(/^[^_]*=/,'')
    } else {
        youTubeId = ""
    }
    obj[video.id] = Object.assign(
        {},
        { id: video.id }, 
        { artist: video.artist }, 
        { video_URL: video.video_URL }, 
        { track_title: video.track_title }, 
        { youTubeId: youTubeId },
        { like_count: video.like_count }
    );
    return obj;
}

const detransform = video => {
    const videoKey = Object.getOwnPropertyNames(video).toString();
    const vid = video[videoKey] 
    return vid
}