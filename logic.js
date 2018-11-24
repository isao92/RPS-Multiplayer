//for chat
var name = "";

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

//for chat
// Capture Button Click
$("#add-user").on("click", function (event) {
    event.preventDefault();

    // set the name value to the value in the html
    name = $("#name-input").val().trim();

    // Code for the push
    database.ref().push({
        name: name,
    });
});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("child_added", function (snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);

    // Change the HTML to reflect
    $("#name-display").text(snapshot.val().name);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


// Button for adding chosen rock
$(document).on("click", "#rock-btn", function (event) {
    event.preventDefault();

    // set the twoChose variable for check to the value in the html
    twoChose = $("#test2").val().trim();

    oneChose = rock;

    // track if player 1 already chose
    playOne = true;

    // Code for the push
    database.ref().push({
        player1: rock,
    })


});

// Button for adding chosen paper
$("#paper-btn").on("click", function (event) {
    event.preventDefault();

    // set the twoChose variable for check to the value in the html
    twoChose = $("#test2").val().trim();

    oneChose = paper;

    // track if player 1 already chose
    playOne = true;

    // Code for the push
    database.ref().push({
        player1: paper,
    })

});

// 2. Button for adding chosen scissors
$("#scissors-btn").on("click", function (event) {
    event.preventDefault();

    // set the twoChose variable for check to the value in the html
    twoChose = $("#test2").val().trim();

    oneChose = scissors;

    // track if player 1 already chose
    playOne = true;

    // Code for the push
    database.ref().push({
        player1: scissors,
    })


});


// 2. Button for player 2
$("#rock2-btn").on("click", function (event) {
    event.preventDefault();

    // set the oneChose variable for check to the value in the html
    oneChose = $("#test").val().trim();

    twoChose = rock;

    // track if player 2 already chose
    playTwo = true;

    // Code for the push
    database.ref().push({
        player2: rock,
    })

});

// 2. Button for adding chosen paper
$("#paper2-btn").on("click", function (event) {
    event.preventDefault();

    // set the oneChose variable for check to the value in the html
    oneChose = $("#test").val().trim();

    twoChose = paper;

    // track if player 2 already chose
    playTwo = true;


    // Code for the push
    database.ref().push({
        player2: paper,
    })

});

// 2. Button for adding chosen scissors
$("#scissors2-btn").on("click", function (event) {
    event.preventDefault();

    // set the oneChose variable for check to the value in the html
    oneChose = $("#test").val().trim();

    twoChose = scissors;

    // track if player 2 already chose
    playTwo = true;

    // Code for the push
    database.ref().push({
        player2: scissors,
    })


});




// make a function to check who one
$(document).on("click", "#announce-winner", function (event) {

    database.ref().on("child_added", function (event) {

        // Change the HTML to reflect
        $("#test").text(event.val().player1);
        $("#test2").text(event.val().player2);

        // current player value
        var playeroneChose = event.val().player1;
        var playertwoChose = event.val().player2;

        //actual value on both players
        var numOne = $("#test").text();
        var numTwo = $("#test2").text();
        console.log("console log numOne: " + numOne);
        console.log("console log numTwo: " + numTwo);

        console.log(playeroneChose);
        //knows what other player chose
        console.log(playertwoChose);


        // if player one wins show player1 as winner
        if (numOne == "paper" && numTwo == "rock" || numOne == "scissors" && numTwo == "paper" || numOne == "rock" && numTwo == "scissors") {

            // Change the HTML to reflect
            $("#winnerIs").text("Player One");
        } else if (numTwo == "paper" && numOne == "rock" || numTwo == "scissors" && numOne == "paper" || numTwo == "rock" && numOne == "scissors") {
            // Change the HTML to reflect
            $("#winnerIs").text("Player Two");
        } else {
            // Change the HTML to reflect
            $("#winnerIs").text("Tie");
            console.log("tie");
        }

        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });



});



