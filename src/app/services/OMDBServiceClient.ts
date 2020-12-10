import {Injectable} from '@angular/core';


@Injectable()
export class OMDBServiceClient {

   fetchMoviesBySearchText = (searchText) =>
    fetch(`https://www.omdbapi.com/?apikey=b01479c3&s=` + searchText)
      .then(response => response.json())

  fetchMovieByID = (movieID) =>
    fetch(`https://www.omdbapi.com/?apikey=b01479c3&i=` + movieID)
      .then(response => response.json())

}
