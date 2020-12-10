import {Injectable} from '@angular/core';

// " credentials: 'include' " -- passes cookies to server

@Injectable()
export class UserServiceClient {

  // for updating only the user's "movies" array
  update = (userId, newEdits) =>
    fetch(`https://mm-nodejs-server-120920.herokuapp.com/update/` + userId, {
      method: 'PUT',
      body: JSON.stringify(newEdits),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

  // for updating all other attributes of user profile (except movies array)
  updateProfile = (userId, newEdits) =>
    fetch(`https://lmm-nodejs-server-120920.herokuapp.com/updateProfile/` + userId, {
      method: 'PUT',
      body: JSON.stringify(newEdits),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

  findUserById = (userId) =>
    fetch(`https://mm-nodejs-server-120920.herokuapp.com/findUserById/` + userId, {
      method: 'POST',
      body: JSON.stringify({userId}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

  logout = () =>
    fetch(`https://mm-nodejs-server-120920.herokuapp.com/logout`, {
      method: 'POST',
      credentials: 'include'
    }).catch(err => console.log(err))


  profile = async () =>
    await fetch(`https://mm-nodejs-server-120920.herokuapp.com/profile`, {
      method: 'POST',
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))


  login = (username, password) =>
    fetch(`https://mm-nodejs-server-120920.herokuapp.com/login`, {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))


  // register = (username, password) =>
  //   fetch(`http://localhost:3000/register`, {
  //     method: 'POST',
  //     body: JSON.stringify({username, password}),
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     credentials: 'include'
  //   }).then(response => response.json())
  //     .catch(err => console.log(err))

  register = (username, password, role, firstName, lastName, email) =>
    fetch(`https://mm-nodejs-server-120920.herokuapp.com/register`, {
      method: 'POST',
      body: JSON.stringify({username, password, role, firstName, lastName, email}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err));


  findAllUsers = () =>
    fetch('https://mm-nodejs-server-120920.herokuapp.com/api/users')
      .then(response => response.json())

}
