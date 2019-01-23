// This is a timed game with trivia questions and multiple choice answers.

// The player can only select one answer per question.

// The game ends when the player either finishes early or the time runs out. The results page will display the number of questions that the player answered correctly and incorrectly.

// Create a countdown timer that counts down approximately 60-120 seconds.

// Clicking the start button begins the game with the countdown timer counting down.

// Create a "Start" button for the countdown timer.

// Create a "Finished" button if player finishes early.

// Create questions and answers.

// When the countdown timer reaches 0, a "Time's Up!" message appears and the player's results (total correct, incorrect, and unanswered questions) are all tallied and displayed.

// The game should restart if the player clicks Start.

var timeleft = 10;

var startTime = 0;
var currentTime = 0;

function convertSeconds(s) {
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min, 2) + ':' + nf(sec, 2);
}

// var ding;

// function preload() {
//   ding = loadSound("ding.mp3");
// }

function setup() {
    noCanvas();
    startTime = millis();


    var params = getURLParams();
    console.log(params);
    if (params.minute) {
        var min = params.minute;
        timeleft = min * 60;
    }

    var timer = select('#timer');
    timer.html(convertSeconds(timeleft - currentTime));

    var interval = setInterval(timeIt, 1000);

    function timeIt() {
        currentTime = floor((millis() - startTime) / 1000);
        timer.html(convertSeconds(timeleft - currentTime));
        if (currentTime == timeleft) {
            //   ding.play();
            clearInterval(interval);
            //counter = 0;
        }
    }

}




// // Global scope variables:
// var correct = 0;
// var incorrect = 0;
// var unanswered = 0
// var countdownStart = 30;

// // Wait until HTML finishes loading before JavaScript runs:
// $(document).ready(function () {

//     // Creates Start button on-click listener event:
//     $("#start").on("click", function () {

//         setTimeout(fiveSeconds, 5000);
//         setTimeout(tenSeconds, 10000);
//         setTimeout(timeUp, 15000);

//         function tenSeconds() {
//             // in the element with an id of `time-remaining` add an h2 saying, "10 Seconds Left!""
//             $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//             // console log 10 seconds left
//             console.log("10 seconds left");
//         }

//         function fiveSeconds() {
//             // in the element with an id of `time-remaining` add an h2 saying, "5 Seconds Left!"
//             $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
//             // console log 5 seconds left
//             console.log("5 seconds left");
//         }

//         function timeUp() {
//             // in the element with an id of `time-remaining` add an h2 saying, "Time's Up!""
//             // console log done
//             console.log("done");
//             $("#time-remaining").append("<h2>Time's Up!</h2>");
//             console.log("Time's Up!");
//         }
//     });
// });