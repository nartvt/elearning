import React, { Component } from 'react';
import CourseItemDetails from './CourseItemDetails';

class CourseItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa } = this.props.coursed;
    return (
      <div className="card">

        <img src={hinhAnh} />
        <h6>{tenKhoaHoc}</h6>
        <p>{moTa}</p>
        <button className="btn btn-success">Detail</button>
       <CourseItemDetails />
      </div>

    );
  }
}

export default CourseItem;