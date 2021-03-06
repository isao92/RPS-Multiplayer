//for chat
var chatText = "";

// intialize tracker for player one and two

var playAgain = true;

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
$("#add-chat").on("click", function (event) {
    event.preventDefault();

    // set the name value to the value in the html
    chatText = $("#chat-input").val().trim();

    // Code for the push
    database.ref("/chat").push({
        chat: chatText,
    });
});

// Firebase watcher + initial loader HINT: .on("value")
database.ref("/chat").on("child_added", function (snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().chat);

    // Change the HTML to reflect
    $("#chat-display").text(snapshot.val().chat);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


// Button for adding chosen rock
$(document).on("click", "#rock-btn", function (event) {
    event.preventDefault();
    if(playAgain){
    
    // Code for the push
    database.ref().push({
        player1: rock,
    })

    }
});

// Button for adding chosen paper
$("#paper-btn").on("click", function (event) {
    event.preventDefault();
    if(playAgain){
    // set the twoChose variable for check to the value in the html
    twoChose = $("#test2").val().trim();


    // Code for the push
    database.ref().push({
        player1: paper,
    })
    }
});

// 2. Button for adding chosen scissors
$("#scissors-btn").on("click", function (event) {
    event.preventDefault();
    if(playAgain){
    // set the twoChose variable for check to the value in the html
    twoChose = $("#test2").val().trim();

    // Code for the push
    database.ref().push({
        player1: scissors,
    })
}


});


// 2. Button for player 2
$("#rock2-btn").on("click", function (event) {
    event.preventDefault();
    if(playAgain){
    // set the oneChose variable for check to the value in the html
    oneChose = $("#test").val().trim();


    // Code for the push
    database.ref().push({
        player2: rock,
    })
}

});

// 2. Button for adding chosen paper
$("#paper2-btn").on("click", function (event) {
    event.preventDefault();

    if(playAgain){

    // set the oneChose variable for check to the value in the html
    oneChose = $("#test").val().trim();

    

    // Code for the push
    database.ref().push({
        player2: paper,
    })
}

});

// 2. Button for adding chosen scissors
$("#scissors2-btn").on("click", function (event) {
    event.preventDefault();

    if(playAgain){

    // set the oneChose variable for check to the value in the html
    oneChose = $("#test").val().trim();


    // Code for the push
    database.ref().push({
        player2: scissors,
    })
}
});


// make a function to check who one
$(document).on("click", "#announce-winner", function (event) {

    console.log("Clicked on Announce winner.")

    database.ref().on("child_added", function (event) {

        // Change the HTML to reflect
        $("#test").text(event.val().player1);
        $("#test2").text(event.val().player2);


        //actual value on both players
        var numOne = $("#test").text();
        var numTwo = $("#test2").text();

        if(numOne && numTwo){

            if(playAgain){
        // show winners
        $("#test").show();
        $("#test2").show();
        playAgain = false;
        console.log(playAgain);
            }
        

        // if player one wins show player1 as winner
        if (numOne == "paper" && numTwo == "rock" || numOne == "scissors" && numTwo == "paper" || numOne == "rock" && numTwo == "scissors") {

            // Change the HTML to reflect
            $("#winnerIs").text("Winner is: Player One");
        } else if (numTwo == "paper" && numOne == "rock" || numTwo == "scissors" && numOne == "paper" || numTwo == "rock" && numOne == "scissors") {
            // Change the HTML to reflect
            $("#winnerIs").text("Winner is: Player Two");
        } else {
            // Change the HTML to reflect
            $("#winnerIs").text("Tie");
            
        }
    }

        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });

});


// Clear Winner to play again
// 2. Button for adding chosen scissors
$("#playagain-btn").on("click", function (event) {
    event.preventDefault();

    //delete firebase database
    database.ref().set("");

    // set the oneChose variable for check to the value in the html
    $("#winnerIs").text("");
    $("#test").text("");
    $("#test2").text("");

    // show winners
    $("#test").hide();
    $("#test2").hide();

    playAgain = true;

});





