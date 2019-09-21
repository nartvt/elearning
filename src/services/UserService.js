import { restConnector } from '../Connectors/Axios';
import * as yup from 'yup';

export const userSchema = yup.object().shape({
  taiKhoan: yup
    .string('taiKhoan must be string, try again !')
    .required('TaiKhoan not empty,please fill !'),
  matKhau: yup
    .string().min(8, "min 8 length, try again !")
    .required("matKhau not empty, please fill!")
    .max(20, "max 20 length, try again !"),
  hoTen: yup
    .string()
    .required("hoTen not empty, please fill!")
    .matches(/^[a-zA-Z]=$/),
  email: yup.string()
    .email()
    .required("email not empty, please fill!"),
  soDT: yup
    .number()
    .required("soDT not empty, please fill!")
    .min(10).max(11)
})
class UserService {
  signUp(param) {
    return restConnector({
      url: `QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: param
    });
  }

  signIn(param) {
    return restConnector({
      url: `/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: param
    });
  }
}

export default new UserService();