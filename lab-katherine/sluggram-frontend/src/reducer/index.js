import {combineReducers} from 'redux';
import profile from './profile';
import auth from './auth';
import photo from './photo';

export default combineReducers({
  auth,
  profile,
  photo,
});
