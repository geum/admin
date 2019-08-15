import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

/**
 * Common Header Component
 *
 * @param {Object} props
 */
const Header = props => {
  /**
   * Renders the component
   *
   * @type {Component}
   */
  return (
    <Navbar className="geum-admin-common header border-bottom" bg="white" expand="lg">
      <Nav>
        <button
          className="btn sidebar-toggle"
          onClick={props.onToggle}
        >
          <i className="fa fa-bars"></i>
        </button>
      </Nav>
      <Nav>
        <Navbar.Toggle />
      </Nav>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto pl-3">
          <Nav.Link>
            <i className="fas fa-bell"></i>
          </Nav.Link>

          <NavDropdown className="dropdown-menu-left" title="John Doe" id="basic-nav-dropdown">
            <NavDropdown.Item>
              Account Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              Sign Out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
