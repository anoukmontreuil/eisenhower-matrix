import React, { Component } from 'react';
import { auth, db } from '../firebase';
import { auth as au } from '../firebase/firebase';

const INITIAL_STATE = {
  accountDeletionConfirmed: false,
  error: null,
};

class DeleteAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  deleteUser = () => {
    const userToDelete = au.currentUser;
    db.doDeleteUser(this.props.uuid)
    userToDelete.delete().catch(err => this.setState(st => { return { error: err }}));
    auth.doSignOut();
  }

  confirmDeletion = () => {
    this.setState(st => { return { accountDeletionConfirmed: true }});
    this.deleteUser();
  }

  render() {

    return (
      <div>
        <h3>Delete Account</h3>
        { this.state.accountDeletionConfirmed
          ? <div>
            ...Deleting your account...
            { this.state.error }
            </div>
          : <div>
              <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#deleteAccountModal">
                Delete Account
              </button>
              <div className="modal fade" id="deleteAccountModal" tabIndex="-1" role="dialog" aria-labelledby="deleteAccountModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-danger" id="deleteAccountModalLabel">Are you sure?</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      If you delete your account, your data will be lost forever.
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-success" data-dismiss="modal" autoFocus>No, Take Me Back To Safety!</button>
                      <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={ this.confirmDeletion }>Yep, Screw This...</button>
                    </div>
                  </div>
                </div>
              </div>
          </div> 
        }
    </div>
    )
  }
}

export default DeleteAccountForm;