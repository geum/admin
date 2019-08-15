import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Default } from '@pages';

/**
 * Admin Routes Component
 *
 * @param {Object} props
 */
const Admin = props => {
  return (
    <Switch>
      <Route exact path="/admin" component={Default} />
    </Switch>
  )
}

export default Admin;
