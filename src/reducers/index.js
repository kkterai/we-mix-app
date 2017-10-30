import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import userReducer from './user_reducer';
import albumReducer from './album_reducer';

const rootReducer = combineReducers({
    user: userReducer, 
    artist: searchReducer,
    album: albumReducer
  });
   
export default rootReducer;