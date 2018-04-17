import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LogInHyperLink } from './LogIn';

import { auth } from '../firebase';

const ResetPasswordPage = () =>
  <div>
    <h1>Reset Password</h1>
    <ResetPasswordForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
  passwordResetRequested: false
};

class ResetPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onPasswordResetRequested = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ 
          ...INITIAL_STATE,
          email: email,
          passwordResetRequested: true }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    const confirmationMessage = (
    <div>
      <p>Password reset link sent to <strong>{ this.state.email }</strong>
      <LogInHyperLink />
      </p>
    </div>
    );

    return (
      <div>
        <input
          value={this.state.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="E-mail Address"
        />
        <button disabled={isInvalid} onClick={this.onPasswordResetRequested} type="submit">
          Reset My Password
        </button>

        { this.state.passwordResetRequested
          ? confirmationMessage
          : null }

        { error && <p>{error.message}</p> }
      </div>
    );
  }
}

const ResetPasswordLink = () =>
  <p>
    <Link to="/recover-password">Forgot Password?</Link>
  </p>

export default ResetPasswordPage;

export {
  ResetPasswordForm,
  ResetPasswordLink,
};