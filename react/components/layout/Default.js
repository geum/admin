import React, { useState, useEffect } from 'react';
import { Common } from '@components';

/**
 * Layout Default Component
 *
 * @param {Object} props
 */
const Default = props => {
  /**
   * Sidebar open/closed state
   *
   * @type {Boolean,Function}
   */
  const [sidebarOpen, setSidebarOpen] = useState(true);

  /**
   * Temporary menu state
   *
   * @type {Array,Function}
   */
  const [menu, setMenu] = useState([
    {
      label: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      href: '/admin/dashboard'
    },
    {
      label: 'System',
      icon: 'fa fa-server',
      href: '#',
      menu: [
        {
          label: 'Schemas',
          icon: 'fa fa-database',
          href: '/admin/system/schema/search'
        },
        {
          label: 'Fieldset',
          icon: 'fa fa-sliders-h',
          href: '/admin/system/fieldset/search'
        },
        {
          label: 'Configuration',
          icon: 'fa fa-cog',
          href: '/admin/system/configuration/search'
        }
      ]
    }
  ]);

  const getActiveMenu = items => {

  }

  /**
   * Listen for media query effect
   *
   * @type {Function}
   */
  useEffect(() => {
    // listen for query changes
    const matchQuery = window.matchMedia('(min-width: 768px)');
    // set media query handler
    const handleMedia = query => setSidebarOpen(query.matches);

    // listen for media changes
    matchQuery.addListener(handleMedia);
    handleMedia(matchQuery);
  }, []);

  /**
   * Handle sidebar toggle
   *
   * @param  {Event} e
   * @return {null}
   */
  const handleToggle = e => {
    setSidebarOpen(!sidebarOpen);
  }

  /**
   * Renders the component
   *
   * @type {Component}
   */
  return (
    <div className={`geum-admin-layout default d-flex ${sidebarOpen ? 'open' : ''}`}>
      <Common.Sidebar open={sidebarOpen} menu={menu} />

      <div className="content-wrapper">
        <Common.Header onToggle={handleToggle} />

        <div className="container-fluid">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Default;
