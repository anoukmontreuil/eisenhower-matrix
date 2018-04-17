import React from 'react';
import { auth } from '../firebase';

const LogOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Log Out
  </button>

export default LogOutButton;