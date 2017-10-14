export default function userReducer(state = { loading: false, videos: [] }, action) {

    switch (action.type) {
        case 'LOADING_USER_VIDEOS':
            return Object.assign({}, state, {loading: true })
        case 'FETCH_USER_VIDEOS':
            return {loading: false, videos: action.payload }
        default:
            return state;
    }
  };

