import React, { Component } from 'react';
import CourseItem from '../components/CourseItem';
import Axios from 'axios';
import { connect } from 'react-redux';
import CourseService from '../services/CourseService';


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
    CourseService.fetchCourse()
    .then(res => {
      let fetchData = res.data;
      // console.log(res.data);
      this.props.setModel(fetchData);
      // this.props.dispatch({
      //   type: 'FETCH_COURSES',
      //   payload: fetchData
      // })
    }).catch(err => {
      console.log(err);
    })
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
const mapDisPatchToProps = dispatch => {
  return {
    setModel: (data) => {
      dispatch({
        type: 'FETCH_COURSES',
        payload: data
      })
    }
  }
}
const mapStateToProps = state => {
  return {
    coursesw: state.coursesData.courseCollections

  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(HomeScreen);