import React, { Component } from 'react';
import HomeScreen from '../screens/HomeScreen';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import CourseItemDetails from '../components/CourseItemDetails';
class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="/" >Elearning</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink
                  activeStyle={{ color: "brown" }}
                  to="/detail"
                  exact
                  className="nav-link"
                 >Home
                </NavLink>
              </li>
            </ul>
          </div>
        </nav> */}


        <Switch>
          <Route path="/detail/:id" component={CourseItemDetails} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Layout;