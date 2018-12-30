import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Landing from './Landing';
import TealBanner from './TealBanner';

const landingUri = '/';
const tealBannerUri = '/TealBanner';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={tealBannerUri} component={TealBanner} />
        <Route exact path={landingUri} component={Landing} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

