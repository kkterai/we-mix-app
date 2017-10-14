export default function searchReducer(state = { loading: false, artistVideos: [] }, action) {
    
        switch (action.type) {
            case 'SEARCH_ARTIST_VIDEOS':
                return Object.assign({}, state, {loading: true })
            case 'FETCH_ARTIST_VIDEOS':
                return {loading: false, artistVideos: action.payload }
            default:
                return state;
        }
      };
    
    