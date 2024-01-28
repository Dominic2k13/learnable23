class Movie {
    constructor(title, year, genre, available) {
      this.title = title;
      this.year = year;
      this.genre = genre;
      this.available = available;
    }
  
    rent() {
      if (this.available) {
        this.available = false;
        console.log(`You have rented ${this.title}. Enjoy!`);
      } else {
        console.log(`${this.title} is not available.`);
      }
    }
  }
  
  // Create three movie instances
  const movie1 = new Movie("Interstellar", 2014, "Sci-Fi", true);
  const movie2 = new Movie("The Matrix", 1999, "Sci-Fi", false);
  const movie3 = new Movie("Spirited Away", 2001, "Animation", true);
  
  // Array to store the movies
  const movies = [movie1, movie2, movie3];
  
  // Function to list available movies
  function listAvailableMovies() {
    console.log("Available movies:");
    movies.forEach(movie => {
      if (movie.available) {
        console.log(`- ${movie.title} (${movie.year}, ${movie.genre})`);
      }
    });
  }
  
  // Function to rent a movie
  function rentMovie(title) {
    const movieToRent = movies.find(movie => movie.title === title);
    if (movieToRent) {
      movieToRent.rent();
    } else {
      console.log(`Movie not found.`);
    }
  }
  
  // Example usage:
  listAvailableMovies();
  rentMovie("Interstellar"); // Output: You have rented Interstellar. Enjoy!
  rentMovie("The Matrix"); // Output: The Matrix is not available.