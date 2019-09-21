import React, { Component } from 'react';
import HomeScreen from '../screens/HomeScreen';
import { connect } from 'react-redux';
import { BrowserRouter, Route, NavLink, Link, Switch } from 'react-router-dom';
import CourseItemDetails from '../components/CourseItemDetails';
import SignUp from './../components/SignUp';
import SignIn from './../components/SignIn';
import { actUserLogin } from '../Store/actions/User';
import { restConnector } from '../Connectors/Axios';
import HookParents from '../components/demoHooks/HookParents';
class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="/" >Elearning</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink
                  // activeStyle={{ color: "brown" }}
                  to="/detail"
                  // exact='true'
                  className="nav-link">Home
                </NavLink>
              </li>
              {this.props.userLogin && (
                <li className="nav-item">
                  <span className="text-white">{this.props.userLogin.taiKhoan}</span>
                </li>
              )}
              {!this.props.userLogin && (
                <>
                  <li className="ml-auto navbar-nav">
                    <NavLink
                      // activeStyle={{ color: "pink" }}
                      to="/signup"
                      // exact="true"
                      className="nav-link">SignUp
                </NavLink>
                  </li>
                  <li className="nav-item ">
                    <Link
                      // activeStyle={{ color: "blue" }}
                      to="/signin"
                      exact="true"
                      className="nav-link">SignIn
                </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      // activeStyle={{ color: "blue" }}
                      to="/lifecycle-hook"
                      exact="true"
                      className="nav-link">Hook
                </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>


        <Switch>
          <Route path="/detail/:id" component={CourseItemDetails} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/lifecycle-hook" component={HookParents} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
  // eslint-disable-next-line react/no-typos
  componentDidmount() {
    const userLogin = localStorage.getItem('loginUser');
    if (userLogin) {
      this.props.dispatch(actUserLogin(JSON.parse("userLogin")));
      restConnector.defaults.headers['Authorization'] = `Bearer ${JSON.parse("userLogin").accessToken}`;
    }
  }
  }
 

export default connect((state) => ({
  userLogin: state.user.userLogin
}))(Layout);