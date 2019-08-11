import React, { Component } from 'react';
import CourseItemDetails from './CourseItemDetails';
import { Link } from 'react-router-dom';
class CourseItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa,maKhoaHoc } = this.props.coursed;
    return (
      <div className="card">

        <img src={hinhAnh} alt ="movie"/>
        <h6>{tenKhoaHoc}</h6>
        <p>{moTa}</p>
        <Link to={`/detail/${maKhoaHoc}`} className="btn btn-success">Detail</Link>
       {/* <CourseItemDetails /> */}
      </div>

    );
  }
}

export default CourseItem;