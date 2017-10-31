export default function userReducer(state = { loading: false, videos: [] }, action) {

    switch (action.type) {
        case 'LOADING_USER_VIDEOS':
            return Object.assign({}, state, {loading: true })
        case 'FETCH_USER_VIDEOS':
            return Object.assign({}, { loading: false },{ videos: action.payload })
        case 'ADD_VIDEO':
            return Object.assign({}, state, { videos: state.videos.concat(action.video) })
        default:
            return state;
    }
  };

