import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "./Type";
import CourseService from '../../services/CourseService';
//async action
export const fetchCourseFromDB = () => {
  return (dispatch) => {
    CourseService.fetchCourse()
      .then(res => {
        const fetchData = res.data;
        dispatch(actFetchCourses(fetchData));
      }).catch(err => {
        console.log(err);
      })
  }
}
export const fetchCourseDetailFromDB = (courseId) => {
  return (dispatch) => {
    CourseService.fetchDetailCourse(courseId)
      .then(res => {
        dispatch(actFetchCoursesDetails(res.data))
      }).catch(err => {
        console.log(err);
      })
  }
}


//action creator 
export const actFetchCourses = (data) => {
  return {
    type: FETCH_COURSES,
    payload: data
  };
}
export const actFetchCoursesDetails = (data) => {
  return {
    type: FETCH_COURSE_DETAIL,
    payload: data
  };
}