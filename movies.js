// Define the Movie class

  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information


// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie

let movieinfo = document.getElementById("movie-info")

class Movie {
  #title;
  #cast;
  #description;
  #rating;
  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }
  updateRating(newRating) {
    this.#rating = newRating
  }
  displayInfo() {
    movieinfo.innerHTML += `Title: ${this.#title}<br>Cast: ${this.#cast}<br>Description: ${this.#description}<br>Rating: ${this.#rating}`
  }
}

let letsMovie = new Movie("minecraft", ["steve", "alex"], "my description", "100");
letsMovie.displayInfo()

let movies = [];
movies.push(letsMovie)
console.log(movies)
updateMovieRating(movies[0], 5)
function updateMovieRating(title, newRating) {
  title.updateRating(newRating)
}
movieinfo.innerHTML += "<br><br>"
letsMovie.displayInfo()
