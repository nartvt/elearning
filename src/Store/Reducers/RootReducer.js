import { combineReducers } from 'redux';
import CoursesReducer from './CoursesReducer';
import UserReducer from './UserReducer';

const RootReducers = combineReducers({
  //state store for save
  coursesData: CoursesReducer,
user: UserReducer
});

export default RootReducers;