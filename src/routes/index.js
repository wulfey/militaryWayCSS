import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import LandingRouter from './Landing';
import TealBannerRouter from './TealBanner';

const landingUri = '/';
const tealBannerUri = '/TealBanner';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={tealBannerUri} component={TealBannerRouter} />
        <Route exact path={landingUri} component={LandingRouter} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

