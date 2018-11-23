// intialize tracker for player one and two
var playOne = false;
var playTwo = false;

// tracking player's choice ("rock paper or scissors")
var oneChose = "";
var twoChose = "";
var rock = "rock";
var paper = "paper";
var scissors = "scissors";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAHt-Z5ktyEYENrhG28lanNmr5upOKqOB0",
    authDomain: "hello-77ab2.firebaseapp.com",
    databaseURL: "https://hello-77ab2.firebaseio.com",
    projectId: "hello-77ab2",
    storageBucket: "hello-77ab2.appspot.com",
    messagingSenderId: "143877996122"
};

firebase.initializeApp(config);

var database = firebase.database();

// Button for adding chosen rock
$(document).on("click", "#rock-btn", function (event) {
    event.preventDefault();

    oneChose = rock;

    // track if player 1 already chose
    playOne = true;

    // Creates local "temporary" object for holding rps data
    var rocky = {
        player1: rock,
    };


    // Uploads temporary object to database
    database.ref().push(rocky);

    // Logs everything to console
    console.log(rocky);

});

// Button for adding chosen paper
$("#paper-btn").on("click", function (event) {
    event.preventDefault();

    oneChose = paper;

    // track if player 1 already chose
    playOne = true;

    // Creates local "temporary" object for holding rps data
    var papery = {
        player1: paper,
    };

    // Uploads paper object to database
    database.ref().push(papery);

    // Logs everything to console
    console.log(papery);

});

// 2. Button for adding chosen scissors
$("#scissors-btn").on("click", function (event) {
    event.preventDefault();

    oneChose = scissors;

    // track if player 1 already chose
    playOne = true;

    // Creates local "temporary" object for holding rps data
    var scissorsy = {
        player1: scissors,
    };

    // Uploads scissors object to database
    database.ref().push(scissorsy);

    // Logs everything to console
    console.log(scissorsy);
});


// 2. Button for player 2
$("#rock2-btn").on("click", function (event) {
    event.preventDefault();

    twoChose = rock;

    // track if player 2 already chose
    playTwo = true;

    // Creates local "temporary" object for holding rps data
    var rocky = {
        player2: rock,
    };

    // Uploads rock object to database
    database.ref().push(rocky);

    // Logs everything to console
    console.log(rocky);

});

// 2. Button for adding chosen paper
$("#paper2-btn").on("click", function (event) {
    event.preventDefault();

    twoChose = paper;

    // track if player 2 already chose
    playTwo = false;


    // Creates local "temporary" object for holding rps data
    var papery = {
        player2: paper,
    };

    // Uploads paper object to database
    database.ref().push(papery);

    // Logs everything to console
    console.log(papery);
});

// 2. Button for adding chosen scissors
$("#scissors2-btn").on("click", function (event) {
    event.preventDefault();

    twoChose = scissors;

    // track if player 2 already chose
    playTwo = false;

    // Creates local "temporary" object for holding rps data
    var scissorsy = {
        player2: scissors,
    };

    // Uploads scissors object to database
    database.ref().push(scissorsy);

    // Logs everything to console
    console.log(scissorsy);

});




// make a function to check who one
$("#announce-winner").on("click", function (event) {
    event.preventDefault();


    database.ref().on("child_added", function (snapshot) {


        // if player one wins show player1 as winner
        if (oneChose == "paper" && twoChose == "rock" || oneChose == "scissors" && twoChose == "paper" || oneChose == "rock" && twoChose == "scissors") {

            // Change the HTML to reflect
            $("#winnerIs").text("Player One");
        } else if (twoChose == "paper" && oneChose == "rock" || twoChose == "scissors" && oneChose == "paper" || twoChose == "rock" && oneChose == "scissors"){
            // Change the HTML to reflect
            $("#winnerIs").text("Player Two");
        } else {
            // Change the HTML to reflect
            $("#winnerIs").text("Tie");
        }

        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });


    // check to see both inputs are there to make computations
    console.log(oneChose);
    console.log(twoChose);
});



