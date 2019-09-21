import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { connect } from "react-redux";
import {login } from '../Store/actions/User';

class SignIn extends Component {
  render() {
    return (

      <div className='container'>
        <div className="row">
          <div className="col-5 mx-auto">
            <Formik
              account={{
                taiKhoan: "taitran",
                matKhau: "0123456"
              }}
              onSubmit={data => {
                this.props.dispatch(login(data,this.props.history));
                }}
              render={({ handleChange, ...formikProps
              }) => (
                  <Form>
                    <h4 className="display-4">Đăng Nhập</h4>
                    <div className="form-group">
                      <label htmlFor="taiKhoan">Tài Khoản</label>
                      <input type="text"
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="matKhau">Mật Khẩu</label>
                      <input type="text"
                        className="form-control" />
                    </div>
                    <div className="form-group text-center">
                      <button type="submit"
                        className="btn btn-success">Đăng nhập</button>
                    </div>
                  </Form>
                )} />

          </div>
        </div>
      </div>
    );
  }
}

export default connect() (SignIn);