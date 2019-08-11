import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-5 mx-auto">
            <form>
              <h4 className="display-4">Đăng Nhập</h4>
              <div className="form-group">
                <label htmlFor>Tài Khoản</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor>Mật Khẩu</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-success">Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;