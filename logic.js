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

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Dont forget to provide initial data to your Firebase database.
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
        console.log($("#test"));
        console.log($("#test2"));
        
        var oneChose = $("#test").val().trim();
        var twoChose = $("#test2").val().trim();

        console.log("One chose: " + oneChose);
        console.log("Two chose: " + twoChose);

        

        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });


    // check to see both inputs are there to make computations
    console.log(oneChose);
    console.log(twoChose);

    // if player one wins show player1 as winner
    if (oneChose == "paper" && twoChose == "rock" || oneChose == "scissors" && twoChose == "paper" || oneChose == "rock" && twoChose == "scissors") {

        // Change the HTML to reflect
        $("#winnerIs").text("Player One");
    } else if (twoChose == "paper" && oneChose == "rock" || twoChose == "scissors" && oneChose == "paper" || twoChose == "rock" && oneChose == "scissors") {
        // Change the HTML to reflect
        $("#winnerIs").text("Player Two");
    } else {
        // Change the HTML to reflect
        $("#winnerIs").text("Tie");
        console.log("tie");
    }
});



