export default function userReducer(state = { loading: false, userVideos: [] }, action) {

    switch (action.type) {
        case 'LOADING_USER_VIDEOS':
            return Object.assign({}, state, {loading: true })
        case 'FETCH_USER_VIDEOS':
            return {loading: false, userVideos: action.payload }
        default:
            return state;
    }
  };

