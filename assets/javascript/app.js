// PSEUDOCODING:
// This is a timed game with trivia questions and multiple choice answers.

// The player can only select one answer per question (via radio buttons).

// The game ends when the player either finishes early or the time runs out. The results page will then tally and display the number of the player's correctly and incorrectly answered questions.

// Clicking the Start button begins the game with the countdown timer counting down.

// Create questions and answers.

// When the countdown timer reaches 0, a "Time's Up!" message appears and the player's results (total correct, incorrect, and unanswered questions) are all tallied and displayed.

// The game should restart if the player clicks Start.

// Create a countdown timer that counts down 60 seconds:
var seconds = 10;

var intervalId;

// Creates Start button on-click listener event:
$("#start").on("click", start);

function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    // Hides Start button
    $('#start').hide();
}

function decrement() {

    seconds--;

    $("#seconds").html("<h1>" + seconds + " seconds remaining" + "</h1>");

    if (seconds === 0) {

        stop();

        console.log("Time's Up!");
    }
}

function stop() {

    clearInterval(intervalId);
}


// // Creates Finished button on-click listener event:
// $("#submit").on("click", submit);

// function submit() {
//     var correct = 0;
//     var numQuestions = 5;
//     var ansArr = ["a", "b", "c", "d", "d"];

//     var q1 = document.forms["trivia-game"]["q1"].value;
//     var q2 = document.forms["trivia-game"]["q2"].value;
//     var q3 = document.forms["trivia-game"]["q3"].value;
//     var q4 = document.forms["trivia-game"]["q4"].value;
//     var q5 = document.forms["trivia-game"]["q5"].value;

//     for (var i = 1; i <= numQuestions.length; i++) {
//         if (eval("q" + i) === "") {
//             console.log("Wrong!");
//         }


//         for (var i = 1; i <= numQuestions.length; i++) {
//             if (eval("q" + i) === ansArr[i - 1]) {
//                 correct++;
//             }
//         }

//         var results = document.getElementById("results")
//         results.innerHTML = "<h2>You scored " + score + "/" + numQuestions + "</h2>"

//     for (var i = 0; i < numQuestions.length; i++) {
//         var response = window.prompt(questions[i].prompt);

//         if (response === questions[i].answer) {
//             correct++;
//             console.log("Correct!");
//         } else {
//             console.log("Wrong!");
//         }
//     }
// };
//     console.log("You got " + correct + "/" + questions.length + " correct.");


// var questions = [
//     {
//         prompt: "What color are apples?\n(a) red\n (b) green\(c) purple\n (d) orange",
//         answer: "a"
//     },
//     {
//         prompt: "What color are oranges?\n(a) red\n (b) green\(c) purple\n (d) orange",
//         answer: "d"
//     },
//     {
//         prompt: "What color are kiwis?\n(a) red\n (b) green\(c) purple\n (d) orange",
//         answer: "b"
//     }
// ]

// var correct = 0;

// for (var i = 0; i < questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);

//     if (response === questions[i].answer) {
//         correct++;
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }
// }

// console.log("You got " + correct + "/" + questions.length + " correct.")