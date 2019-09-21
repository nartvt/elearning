import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import userService, { userSchema} from './../services/UserService';
import TextField from '@material-ui/core/TextField';
class SignUp extends Component {

  render() {
    return (
      <div className="ntainer">
      <div className="row">
        <div className="col-5 mx-auto">
          <Formik
            initialValue={{
              taiKhoan: '',
              matKhau: '',
              hoTen: '',
              soDT: '',
              maNhom: 'GP01',
              email: ''
            }}
            validationSchema={userSchema}
            onSubmit={values => {
              console.log(values);
              userService.signUp(values).then(res => {
                console.log(res);
              });
            }}
            render={({
              handleChange, errors,touched, ...formikProps }) => {
              console.log(errors);
              return (<Form>
                <h4 className="display-4">Đăng Ký</h4>
                <div className="form-group">
                  <label htmlFor="taiKhoan">Tài Khoản</label>
                  <Field type="text"
                    name="taiKhoan"
                    onChange={handleChange}
                    // onFocus
                    className="form-control" />
                  {errors.taiKhoan && touched.taiKhoan && (
                    <p className="text-danger" >{errors.taiKhoan}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="matKhau">Mật Khẩu</label>
                  <Field type="text"
                    name="matKhau"
                    onChange={handleChange}
                    className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="hoTen">Họ Tên: </label>
                  <Field type="text"
                    name="hoTen"
                    onChange={handleChange}
                    className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email"
                    name="email"
                    onChange={handleChange}
                    className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="soDT">Số ĐT</label>
                  <Field type="text"
                    name="soDT"
                    onChange={handleChange}
                    className="form-control" />
                </div>
                {/* <div className="form-group">
          <label htmlFor>Loại Người Dùng: </label>
          <input type="radio" ngmodel name="loanguoidung" defaultValue="HV" />Học Viên
          <input type="radio" ngmodel name="loanguoidung" defaultValue="GV" />Giáo Vụ
        </div> */}
                <div className="form-group">
                  <button className="btn btn-success" type="submit">Đăng Ký</button>
                </div>
              </Form>
              );  
          }} />
        </div>
      </ div>
    </div>)
  }
      

}
    
export default SignUp;