import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from '@components';
import { Default } from '@pages';

/**
 * Admin Routes Component
 *
 * @param {Object} props
 */
const Admin = props => {
  return (
    <Layout.Default>
      <Switch>
        <Route path="/admin" component={Default} />
      </Switch>
    </Layout.Default>
  )
}

export default Admin;
