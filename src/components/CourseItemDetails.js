import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourseDetailFromDB } from '../Store/actions/Courses';
class CourseItemDetails extends Component {
  render() {
    const { moTa, tenKhoaHoc, hinhAnh } = this.props.coursesDetail;
    return (
      <div >
        <img src={hinhAnh} alt="movie"/>
        <h6>{tenKhoaHoc}</h6>
        <p>{moTa}</p>
        <button className="btn btn-success">Detail</button>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourseDetailFromDB(this.props.match.params.id))
  }
}
// const mapDisPatchToProps = dispatch => {
//   return {
//     setModel: (data) => {
//       dispatch({
//         type: FETCH_COURSE_DETAIL,
//         payload: data
//       })
//     }
//   }
// }
const mapStateToProps = state => {
  return {
    coursesDetail: state.coursesData.courseDetails

  }
}
export default connect(mapStateToProps)(CourseItemDetails);