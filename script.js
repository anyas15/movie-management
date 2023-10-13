function displayConsoleOutput() {
    const consoleLog = console.log; 
    console.log = function(message) {
      const consoleOutput = document.getElementById("console-output");
      if (consoleOutput) {
        consoleOutput.textContent += message + "\n";
      }
      consoleLog.apply(console, arguments);
    };
  }

displayConsoleOutput();
let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies...");
    let count = 0;
    for (let i = 0; i < allMovies.length; i++) {
        let movie = allMovies[i];
        console.log(`${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}`);
        count++;
    }
    console.log(`\nYou have ${count} movies in total.`);
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let  highRatingMovies = [];
    let count = 0;
    console.log(`printing movie that has a rating higher than ${rating}`);
    for (let i = 0; i < allMovies.length; i++) {
        let movie = allMovies[i];
        if (movie.rating > rating) {
            highRatingMovies.push(movie);
            count++;
            console.log(`${movie.title} has a rating of ${movie.rating}`);
        }
    }
    console.log(`In total, there are ${count} matches`);
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    for (let i = 0; i < allMovies.length; i++) {
        let movie = allMovies[i]
        if (movie.title === title) {
            movie.haveWatched = !movie.haveWatched;
            return;
        }
    }
    
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);