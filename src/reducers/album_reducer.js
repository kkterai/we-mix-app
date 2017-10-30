export default function albumReducer(state = { loading: false, tracks: [] }, action) {
    
    switch (action.type) {

        case 'SEARCH_ALBUM_VIDEOS':
            return Object.assign({}, state, {loading: true })
        case 'FETCH_ALBUM_VIDEOS':
            let videoArray = action.payload.mvids
            console.log(action)
            let tracks = videoArray.filter( video => video.idAlbum === action.id )
            console.log(tracks)
            return { loading: false, tracks: tracks }
        default:
            return state;

    }
}
