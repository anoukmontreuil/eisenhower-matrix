import React, { Component } from 'react';

import withAuthorization from './WithAuthorization';
import { db } from '../firebase';
import { base } from '../firebase/firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  componentWillMount() {
    this.usersRef = base.syncState('users', {
      context: this,
      state: 'users'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.usersRef);
  }

  componentDidMount() {
    db.onceGetUsers().then(
      snapshot => this.setState(
        () => ({ users: snapshot.val() })
      )
    )
  }

  render() {
    const { users } = this.state;

    const UserList = ({ users }) =>
    <div>
      <h2>Users List</h2>
      <h5>(Saved on Sign Up in Firebase Database)</h5>
  
      <ul>
        {Object.keys(users).map(key =>
          <li key={key}>{users[key].username}</li>
        )}
      </ul>
    </div>

    return (
      <div>
        <h1>Home</h1>
        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);