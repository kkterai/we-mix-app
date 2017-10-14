export default function searchReducer(state = { loading: false, albums: [] }, action) {
    
        switch (action.type) {
            case 'SEARCH_ARTIST_VIDEOS':
                return Object.assign({}, state, {loading: true })
            case 'FETCH_ARTIST_VIDEOS':
                return {loading: false, albums: action.payload }
            default:
                return state;
        }
      };
    
    