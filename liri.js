require("dotenv").config();
var inquirer = require("inquirer");
var keys = require("./keys.js");

//  TWITTER  //
var Twitter = require("twitter");
var client = new Twitter(keys.twitter);

var params = { screen_name: 'saphronica' };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    } else {
        console.log("There was a problem along the way you idiot...sorry!");
    }

    console.log(response);
    console.log(JSON.stringify(tweets));
});

//  SPOTIFY  //

//I had part of this working and then I started messing with it because I couldn't
//get it to query out the correct song so...now it doesn't work at all.

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
fs.readFile("random.txt", "utf8", function(error, response) {

    spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(spotify.query);
    })
});

// Add the code required to
// import the `keys.js`
// file and store it in a variable.

// * You should then be able to access your keys information like so

// ```js
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
// ```

// 10. Make it so liri.js can take in one of the following commands:

//   * `my-tweets`

//   * `spotify-this-song`

//   * `movie-this`

//   * `do-what-it-says`

// **** COMMAND LINE INFO TO RUN COMMANDS ****
// TWITTER: `node liri.js my-tweets`

//    * This will show your last 20 tweets and when they were created at in your terminal/bash window.
//    *  `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window

//      * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.
//You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

// OMDB:
// `node liri.js movie-this '<movie name here>'`

//    * This will output the following information to your terminal/bash window:

//      ```
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//      ```

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'