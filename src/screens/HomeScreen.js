import React, { Component } from 'react';
import CourseItem from '../components/CourseItem';
import { connect } from 'react-redux';
import { fetchCourseFromDB} from '../Store/actions/Courses';

class HomeScreen extends Component {
  render() {
    return (
      <>
        <h1>Cybersoft Elearning</h1>
        <div className='container'>
          <div className='row'>
            {/* <div className="col-3"> */}
              {this._renderCourseItem(this.props.coursesw)}
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourseFromDB())
  }
  _renderCourseItem = (data) => {
    console.log(data)
    return data.map((course, i) => {
      return (
        <div className='col-4' key={i}>
          <CourseItem coursed={course} />
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    coursesw: state.coursesData.courseCollections

  }
}

export default connect(mapStateToProps)(HomeScreen);