export default function albumReducer(state = { loading: false, tracks: [] }, action) {
    
    switch (action.type) {

        case 'SEARCH_ALBUM_VIDEOS':
            return Object.assign({}, state, {loading: true })
        case 'FETCH_ALBUM_VIDEOS':
            if (action.payload.mvids) {
                let videoArray = action.payload.mvids
                let tracks = videoArray.filter( video => video.idAlbum === action.id )
                console.log(tracks)
                return Object.assign({}, { tracks: tracks }, {loading: true })
            }
            return Object.assign({}, state, {loading: false })
        default:
            return state;

    }
}
