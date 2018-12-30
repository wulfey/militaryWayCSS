import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Landing from '../Views/Landing';


export default function LandingRouter() {
  return (
    <Layout>
      <Switch>
        <Route path={'/'} component={Landing} />
      </Switch>
    </Layout>
  )
}
