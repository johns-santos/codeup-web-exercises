"use strict";
// const movieAPI = require('./movieAPI.js');
const movieAPI = require('./api.js');
getMovieList();

//How that getzzzzz worx....
function getMovieList() {
    document.getElementById("movieApp").innerHTML = `<h3>Loading...</h3>
        <img src="./image/popcorn.gif" alt="popcorn">`;
    movieAPI.getMovies().then((movies) => {
        let movieApp = document.getElementById("movieApp");
        let movieAppHTML = `<table id="movieTable">
                                <tr>
                                    <th>Title</th>
                                    <th>Rating</th>
                                    <th><em>X</em></th>
                                </tr>
                                <tbody>`;
        movies.forEach((movie) => {
            let stars = "";

            for (let i = 0; i < movie.rating; i++) {
                stars += '&#9733;';
            }

            movieAppHTML += `<tr class="movieRow"><td>${movie.title}</td><td>${stars}</td><td><a class="deleteButton" data-id="${movie.id}" href="#">Delete</a></td></tr>`;
        });
        movieAppHTML += "</tbody></table>" + "<h2>Add A Movie and Leave a Star Rating</h2>";
        movieApp.innerHTML = movieAppHTML;

        let deleteButtons = document.getElementsByClassName("deleteButton");
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener("click", deleteMovie);
        }
        document.getElementById('add-button').style.display = "inline-block";
        document.getElementById('update-button').style.display = "inline-block";
        document.getElementById('back-button').style.display = "none";
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.')
    });
}

function deleteMovie(evt) {
    evt.preventDefault();
    // Reference attribute
    let dataID = evt.target.getAttribute("data-id");
    document.getElementById("movieApp").innerHTML = `<h3>Loading...</h3>
        <img src="./image/popcorn.gif" alt="popcorn">`;
    movieAPI.deleteMovie(dataID).then(() => {
        getMovieList();
    });

}

function addMovie(evt) {
    let form = document.forms.addMovie;
    let newMovie = {
        title: form.title.value,
        rating: form.rating.value,
    };

    evt.preventDefault();
    document.getElementById("movieApp").innerHTML = `<h3>Loading...</h3>
        <img src="./image/popcorn.gif" alt="popcorn">`;

    movieAPI.addMovie(newMovie).then(response => {
        evt.target.removeEventListener('click', addMovie);
        getMovieList();
    });
}

function displayMovieForm(method, title, rating) {
    let appContainer = document.getElementById('movieApp');
    let movieForm = `<h3 class="form-title">Add And Rate A Movie</h3><form name="${method}Movie" class="movie-form">
    <label for="title">Title: </label>
    <input name="title" type="text" id="title" placeholder="Movie Title">
    <h4>Rating: </h4>
    <input type="radio" name="rating" id="rating-1" value="1">
    <label for="rating-1">1 Star ⭐</label><br>
    <input type="radio" id="rating-2" name="rating" value="2">
    <label for="rating-2">2 Star ⭐⭐</label><br>
    <input type="radio" id="rating-3" name="rating" value="3">
    <label for="rating-3">3 Star ⭐⭐⭐</label><br>
    <button class= "addMovieBtn" id="${method}-movie-button" type="submit">Submit</button>
  </form>`;
    appContainer.innerHTML = movieForm;
    if (method === "update") {
        document.getElementById(`rating-${rating}`).checked = true;
        document.forms.updateMovie.title.value = title;
    }

}

function displayAddMovieForm() {

    displayMovieForm("add");

    document.getElementById('add-button').style.display = 'none';
    document.getElementById('back-button').style.display = 'inline-block';
    document.getElementById('add-movie-button').addEventListener('click', addMovie);
}

document.getElementById('add-button').addEventListener('click', (e) => {
    e.preventDefault();
    displayAddMovieForm();
});

document.getElementById('update-button').addEventListener('click', (e) => {
    e.preventDefault();
    displayUpdateMovieForm();
});

document.getElementById('back-button').addEventListener('click', getMovieList);

function updateMovie(movieID) {
    let form = document.forms.updateMovie;
    let existingMovie = {
        title: form.title.value,
        rating: form.rating.value,
    };
    document.getElementById("movieApp").innerHTML = `<h3>Loading...</h3>
        <img src="./image/popcorn.gif" alt="popcorn">`;
    movieAPI.updateMovie(movieID, existingMovie).then(() => getMovieList());
}

function displayUpdateMovieForm() {
    document.getElementById("movieApp").innerHTML = `<h3>Loading...</h3>
        <img src="./image/popcorn.gif" alt="popcorn">`;
    movieAPI.getMovies().then(movies => {
        let appContainer = document.getElementById('movieApp');
        let selectOptions = "";
        movies.forEach(movie => {
            selectOptions += `<option value="${movie.id}" data-rating="${movie.rating}">${movie.title}</option>`;
        });

        let updateMovieForm = `<h2 class="form-title">Update Movie!</h2><form name="updateMovie">
             <label for="title">Title: </label>
             <select name="movieUpdate" id="movieUpdate">
             <option>Select Movie</option>
                ${selectOptions}
            </select>
            </form>`;

        document.getElementById('update-button').style.display = 'none';
        document.getElementById('add-button').style.display = 'inline-block';
        document.getElementById('back-button').style.display = 'inline-block';
        appContainer.innerHTML = updateMovieForm;

        document.getElementById("movieUpdate").addEventListener("change", () => {
            let select = document.forms.updateMovie.movieUpdate;
            let selectedOption = (select[select.selectedIndex]);
            let rating = selectedOption.getAttribute("data-rating");

            displayMovieForm("update", selectedOption.innerText, rating);

            document.getElementById('update-movie-button').addEventListener("click", (ev) => {
                ev.preventDefault();
                updateMovie(selectedOption.value);
            });
        });
    });
}
