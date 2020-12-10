import {Injectable} from '@angular/core';

// " credentials: 'include' " -- passes cookies to server

@Injectable()
export class MovieServiceClient {

  getMovieMatchDetails = (mId) =>
    fetch(`https://mm-nodejs-server-120920.herokuapp.com/details/` + mId, {
      method: 'POST',
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

  updateMovieDetailsAddUser = (mId, uId) =>
    fetch(`https://mm-nodejs-server-120920.herokuapp.com/details/` + mId + `/update`, {
      method: 'POST',
      body: JSON.stringify({uId}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

}
