import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import userReducer from './user_reducer'

const rootReducer = combineReducers({
    user: userReducer, 
    artist: searchReducer
  });
   
export default rootReducer;