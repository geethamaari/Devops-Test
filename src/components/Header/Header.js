import React, {Component} from 'react';
import { Nav, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);
  } 

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
      return (
          <header className="app-header navbar">
              <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
                  <span className="glyphicon glyphicon-menu-hamburger"></span>
              </NavbarToggler>
              <NavbarBrand href="#"></NavbarBrand>
              <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
                  <span className="glyphicon glyphicon-menu-hamburger"></span>
              </NavbarToggler>
              <Nav className="d-md-down-none" navbar>
                  <div className="headerSales">CDN Log Analytics</div>
              </Nav>
              <Nav className="ml-auto" navbar>
                  <NavItem className="d-md-down-none">
                      <NavLink className="welcome-note" href="#">
                          <span className="username-text"></span><br />
                          <span className="impersonate-text">
                          </span>
                      </NavLink>
                  </NavItem>
              </Nav>
          </header>


    );
  }
}


export default (Header);
