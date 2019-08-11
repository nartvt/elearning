import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
class CourseItemDetails extends Component {
  render() {
    const { maKhoaHoc, maNhom, moTa, ngayTao, tenKhoaHoc, hinhAnh } = this.props.coursesDetail;
    return (
      <div >
        <img src={hinhAnh} />
        <h6>{tenKhoaHoc}</h6>
        <p>{moTa}</p>
        <button className="btn btn-success">Detail</button>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=LTC_GP01",
      method: "GET"
    }).then(res => {
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
}
const mapDisPatchToProps = dispatch => {
  return {
    setModel: (data) => {
      dispatch({
        type: 'FETCH_DETAIL',
        payload: data
      })
    }
  }
}
const mapStateToProps = state => {
  return {
    coursesDetail: state.coursesData.courseDetails

  }
}
export default connect(mapStateToProps, mapDisPatchToProps) (CourseItemDetails);