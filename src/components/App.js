import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import LogInPage from './LogIn';
import ResetPasswordPage from './ResetPassword';
import PasswordUpdateForm from './UpdatePassword';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';

import WithAuthentication from './WithAuthentication';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <hr/>
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.LOG_IN} component={() => <LogInPage />} />
      <Route exact path={routes.UPDATE_PASSWORD} component={() => <PasswordUpdateForm />} />
      <Route exact path={routes.RESET_PASSWORD} component={() => <ResetPasswordPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </Router>

export default WithAuthentication(App);