import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () => db.ref('users').once('value');

export const doDeleteUser = id => {
  console.log()
  db.ref(`users/${id}`).remove()
}