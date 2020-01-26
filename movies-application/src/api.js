const getMovies = () => {
  return fetch('/api/movies')
      .then(response => response.json());
};



/* TODO: Req 1 - Remove movie (DELETE) from DB referencing ID*/
const deleteMovie = (movieID) => {
  let reqOptions = {
    method: "DELETE"
  };
  let req = new Request(`/api/movies/${movieID}`, reqOptions);
  return fetch(req);
};


/* TODO: Req 2 - Create (POST) Movie */
const addMovie = (newMovie) => {
  let reqOtions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: newMovie.title,
      rating: newMovie.rating
    })
  };

  let req = new Request("/api/movies", reqOtions);

  return fetch(req);
};


/*TODO: Req 3 - Update (PUT) Movie */
const updateMovie = (movieID, infoToUpdate) => {
  let reqOptions = {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title: infoToUpdate.title,
      rating: infoToUpdate.rating
    })
  };

  let req = new Request(`/api/movies/${movieID}`, reqOptions);

  return fetch(req);
};

module.exports = { getMovies, addMovie, updateMovie, deleteMovie };


/*    TEST  ------- END POINTS   -   available for use................

http://localhost:3000/movies/33

http://localhost:1313/api/movies/?_sort=title&_order=asc

http://localhost:1313/api/movies/?_sort=rating&_order=des

 */
