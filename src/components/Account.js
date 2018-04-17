import React from 'react';
import AuthUserContext from './AuthUserContext';
import PasswordUpdateForm from './UpdatePassword';
import DeleteAccountForm from './DeleteAccount';
import withAuthorization from './WithAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account Settings</h1>
        <h5>{authUser.email}</h5>
        <PasswordUpdateForm />
        <DeleteAccountForm uuid={authUser.uid}/>
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);