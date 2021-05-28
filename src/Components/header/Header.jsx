import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

class Header extends Component {
  state = {
    isNavOpen: false,
  };

  toggleNav = () => {
    console.log("eww");
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };
  toggleNav = this.toggleNav.bind(this);
  render() {
    return (
      <div>
        <Navbar bg="light" varient="dark">
          <Navbar.Toggle onClick={this.toggleNav} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand className="brandname">News Room</Navbar.Brand>

            <Nav.Item>
              <NavLink className="nav-link" to="/">
                Display Cards
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" to="/readNow" eventKey="link-1">
                ReadNow
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" to="/register" eventKey="link-2">
                Register
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" to="/login" eventKey="link">
                Login
              </NavLink>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
