import {Injectable} from '@angular/core';

// " credentials: 'include' " -- passes cookies to server
@Injectable()
export class CurateServiceClient {

  getCuratedLists = () =>
    fetch(`http://mm-nodejs-server-120920.herokuapp.com/curate/` , {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

  deleteFromCuratedList  = ( docID ) =>
    fetch(`http://mm-nodejs-server-120920.herokuapp.com/curate/delete/` + docID  , {
      method: 'DELETE',
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

  addToCuratedList  = (movieID, movieObject ) =>
    fetch(`http://mm-nodejs-server-120920.herokuapp.com/curate/create/`   , {
      method: 'POST',
      body: JSON.stringify({movieID, movieObject}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

}
