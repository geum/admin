import React from 'react';
import posed from 'react-pose';
import { Link } from 'react-router-dom';

/**
 * Animated posed container
 *
 * @type {Component}
 */
const Container = posed.nav({
  open: {
    delayChildren: 300,
    marginLeft: 0,
    staggerChildren: 50
  },
  closed: {
    delay: 300,
    marginLeft: '-230px'
  }
});

/**
 * Animated posed menu item
 *
 * @type {Component}
 */
const MenuItem = posed.li({
  open: {
    left: 0,
    opacity: 1
  },
  closed: {
    left: -30,
    opacity: 0
  }
});

/**
 * Common sidebar component
 *
 * @param {Object} props
 */
const Sidebar = props => {
  /**
   * Renders the menu items
   *
   * @param  {Object} items
   * @return {Component}
   */
  const renderMenu = items => {
    return (
      <ul className="menu-items">
        {items.map(item => (
          <MenuItem className="menu-item">
            <Link
              to="#"
              className="menu-content d-block"
            >
              <div
                className="menu-detail d-flex p-3 align-items-center"
              >
                <div className="icon">
                  <i className={item.icon}></i>
                </div>

                <div className="label pl-3 w-100">
                  {item.label}
                </div>

                <div className="toggle">
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>

              {Array.isArray(item.menu) && renderMenu(item.menu)}
            </Link>
          </MenuItem>
        ))}
      </ul>
    )
  }

  /**
   * Renders the component
   *
   * @type {Component}
   */
  return (
    <Container
      pose={props.open ? 'open' : 'closed'}
      className={`geum-admin-common sidebar ${props.open ? 'open' : ''}`}
    >
      <div className="branding d-flex align-items-center px-3">
        <h1>GEUM ADMIN</h1>
      </div>

      <div className="menu">
        {renderMenu(props.menu || [])}
      </div>
    </Container>
  );
}

export default Sidebar;
