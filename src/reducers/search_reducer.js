export default function searchReducer(state = { loading: false, albums: [], videos: [] }, action) {
    
        switch (action.type) {
            case 'SEARCH_ARTIST_ALBUMS':
                return Object.assign({}, state, {loading: true })
            case 'FETCH_ARTIST_ALBUMS':
                return { loading: false, albums: action.payload }
            case 'SEARCH_ALBUM_VIDEOS':
                return Object.assign({}, state, {loading: true })
            case 'FETCH_ALBUM_VIDEOS':
                return { loading: false, albums: [], videos: action.payload }

            default:
                return state;
        }
      };
    
    