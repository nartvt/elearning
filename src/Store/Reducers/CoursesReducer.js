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
  courseCollections: [],
  courseDetails: {}
};
const CoursesReducer = (state = inittialCourse, action) => {
  switch (action.type) {
    case 'FETCH_COURSES':
      return { ...state, courseCollections: action.payload };
    case 'FETCH_DETAIL':
      return { ...state, courseDetails: action.payload };
    default: return state;
  }
}
export default CoursesReducer;