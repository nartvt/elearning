import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "../actions/Type";

// let inittialCourse = {
//   biDanh: '',
//   danhMucKhoaHoc: '',
//   hinhAnh: '',
//   luotXem: '',
//   maKhoaHoc: '',
//   maNhom: '',
//   moTa: '',
//   ngayTao: '',
//   nguoiTao: '',
//   soLuongHocVien: '',
//   tenKhoaHoc: ''
// }
let inittialCourse = {
  courseCollections: [
    {
      maNhom: 'GP01',
      hinhAnh: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1552420872/amc-cdn/production/2/movies/50900/50869/PosterDynamic/74480.jpg',
      moTa: 'C++',
      tenKhoaHoc: 'Lap Trinh c/c++',
      maKhoaHoc: '155'
    }
  ],
  courseDetails: {}
};
const CoursesReducer = (state = inittialCourse, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return { ...state, courseCollections: action.payload };
    case FETCH_COURSE_DETAIL:
      return { ...state, courseDetails: action.payload };
    default: return state;
  }
}
export default CoursesReducer;