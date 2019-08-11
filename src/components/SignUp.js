import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5 mx-auto">
            <form>
              <h4 className="display-4">Đăng Ký</h4>
              <div className="form-group">
                <label htmlFor>Tài Khoản</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor>Mật Khẩu</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor>Họ Tên: </label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor>Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor>Số ĐT</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor>Loại Người Dùng: </label>
                <input type="radio" ngmodel name="loanguoidung" defaultValue="HV" />Học Viên
          <input type="radio" ngmodel name="loanguoidung" defaultValue="GV" />Giáo Vụ
        </div>
              <div className="form-group">
                <button className="btn btn-success" type="submit">Đăng Ký</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default SignUp;