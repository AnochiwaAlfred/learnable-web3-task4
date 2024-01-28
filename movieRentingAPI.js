


// 3. You will work on a simple Movie renting API(An App, a simple one) that lets people rent movies from a movie store. 
//     By applying everything learnt so far, you will build out your movie renting API using ES6 JavaScript Classes and Objects/Functions 
//     where needed.


class Movie {
    constructor(id,title, genre, releaseYear, availableCopies) {
        this.id=id
        this.title = title;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.availableCopies = availableCopies;
        this.rentedCopies = 0;
    }
  
    rentMovie2() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        this.rentedCopies++;
        console.log(`${this.title} rented successfully.`);
      } else {
        console.log(`${this.title} is currently not available for rent.`);
      }
    }
  
    returnMovie() {
      if (this.rentedCopies > 0) {
        this.availableCopies++;
        this.rentedCopies--;
        console.log(`${this.title} returned successfully.`);
      } else {
        console.log(`${this.title} has no rented copies.`);
      }
    }
  
    displayInfo() {
      console.log(`
        ID: ${this.id} 
        Title: ${this.title}
        Genre: ${this.genre}
        Release Year: ${this.releaseYear}
        Available Copies: ${this.availableCopies}
        Rented Copies: ${this.rentedCopies}
      `);
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
      console.log(`${movie.title} added to the movie store.`);
    }
  
    rentMovie(title) {
      let movieInstance;
      for (let movie in this.movies){
          if (this.movies[movie].title == title){
            movieInstance=this.movies[movie]
            movieInstance.rentMovie2();
        } 
      }
      if (typeof movieInstance == "undefined"){
            console.log(`Movie with Title ${title} not found.`);
        }
    }
  
    returnMovie(title) {
      const movie = this.movies.find(movie => movie.title === title);
      if (movie) {
        movie.returnMovie();
      } else {
        console.log(`Movie with title ${title} not found.`);
      }
    }
  
    displayMovies() {
      console.log("\nMovies in the store:");
      this.movies.forEach(movie => {
        movie.displayInfo();
      });
    }
  }
  
  // Usage:
console.log('-----------------------Question 3------------------------ \n ')

const movieStore = new MovieStore();
  
const movie1 = new Movie("1", "Lift", "Action/Comedy", 2024, 5);
const movie2 = new Movie("2", "They Cloned Tyrone", "Mystery/Sci-fi ", 2023, 3);

movieStore.addMovie(movie1);
movieStore.addMovie(movie2);

movieStore.displayMovies();

movieStore.rentMovie("Lift");
movieStore.returnMovie("They Cloned Tyrone");

movieStore.displayMovies();
console.log('\n-----------------------End of Question 3------------------------ \n \n \n \n \n ')
  