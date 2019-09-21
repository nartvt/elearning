import { restConnector } from '../Connectors/Axios';
class CourseService{
   
  fetchCourse() {
    return restConnector({
      url: `/QuanLyKhoaHoc/LayDanhSachKhoaHoc`,
      method: "GET"
    });
  }
   fetchDetailCourse(courseId) {
     return restConnector({
       url: `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`,
       method: "GET"
     });
   }
 }
export default new CourseService();