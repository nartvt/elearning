import Axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;
 class CourseService{
  fetchCourse() {
    return Axios({
      url: `${baseURL}/QuanLyKhoaHoc/LayDanhSachKhoaHoc`,
      method: "GET"
    });
  }
   fetchDetailCourse() {
     return Axios({
       url: `${baseURL}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=LTC_GP01`,
       method: "GET"
     });
   }
 }
export default new CourseService();