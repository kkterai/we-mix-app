export default function videosReducer(state = { loading: false, videos: [] }, action) {

    switch (action.type) {
        case 'LOADING_USER_VIDEOS':
            return Object.assign({}, state, {loading: true })
        case 'FETCH_USER_VIDEOS':
            return {loading: false, artistVideos: action.payload }
        case 'SEARCH_ARTIST_VIDEOS':
            return Object.assign({}, state, {loading: true })
        case 'FETCH_ARTIST_VIDEOS':
            return {loading: false, artistVideos: action.payload }
        default:
            return state;
    }
  };

