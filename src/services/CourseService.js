import Axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;
console.log(baseURL)
class CourseService{
   
  fetchCourse() {
    return Axios({
      url: `${baseURL}/QuanLyKhoaHoc/LayDanhSachKhoaHoc`,
      method: "GET"
    });
  }
   fetchDetailCourse(courseId) {
     return Axios({
       url: `${baseURL}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`,
       method: "GET"
     });
   }
 }
export default new CourseService();