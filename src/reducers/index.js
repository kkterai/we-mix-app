import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import userReducer from './user_reducer'

const rootReducer = combineReducers({
    userVideos: userReducer, 
    artistVideos: searchReducer
  });
   
export default rootReducer;