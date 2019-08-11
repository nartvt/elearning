import { combineReducers } from 'redux';
import CoursesReducer from './CoursesReducer';

const RootReducers = combineReducers({
  //state store for save
  coursesData: CoursesReducer,

});

export default RootReducers;