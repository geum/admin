import React from 'react';
import { Layout } from '@components';

/**
 * Default Admin Page
 *
 * @param {Object} props
 */
const Default = props => {
  return (
    <Layout.Default>
      <div className="row">
        <div className="col">
          <h1>Default Page</h1>
        </div>
      </div>
    </Layout.Default>
  )
}

export default Default;
