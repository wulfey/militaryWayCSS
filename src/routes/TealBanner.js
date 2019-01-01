import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import TealBanner from '../Views/TealBanner';


export default function TealBannerRouter() {
  return (
    <Layout>
      <Switch>
        <Route  path="/TealBanner/:name"  component={TealBanner} />
      </Switch>
    </Layout>
  )
}
