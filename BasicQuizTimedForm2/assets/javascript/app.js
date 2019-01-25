// PSEUDOCODING:
// This is a timed game with form trivia questions and multiple choice answers.

// Clicking the Start button begins the game with the countdown timer counting down.

// The player can only select one answer per question (via radio buttons).

// The game ends when the player either finishes early or the time runs out. The results page will then tally and display the number of the player's correctly and incorrectly answered questions.

// When the countdown timer reaches 0, a "Time's Up!" message appears and the player's results (total correct, incorrect, and unanswered questions) are all tallied and displayed.

// The game should restart if the player clicks Start.



// BEGIN CODING HERE:

// Creates Start button on-click listener event:
$("#start").on("click", start);

function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    // clockRunning = true;
    // Hides Start button
    $('#start').hide();
}

// Global variables:
var intervalId;

// Create a countdown timer that counts down 60 seconds:
var seconds = 3;

// Creates "countdown in progress":
function decrement() {

    seconds--;

    $("#seconds").html("<h1>" + seconds + " seconds remaining..." + "</h1>");

    // Creates "Time's Up" message:
    if (seconds === 0) {
        $("#seconds").hide();
        stop();

        // console.log("Time's Up!");

        test.innerHTML = "<h2>Time's up! You correctly answered " + correct + " of " + questions.length + " questions.</h2>";
    }
}

// When countdown completes:
function stop() {
    clearInterval(intervalId);
    test.innerHTML = "<h2>Time's up! You correctly answered " + correct + " of " + questions.length + " questions.</h2>";
    // Gets link for audio:
    var audio = document.createElement("audio");
    audio.setAttribute("src", "assets/good_bad_ugly.wav");

    // Plays audio file for losing "roar":
    audio.play();
}

var index = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
    ["'You've gotta ask yourself one question: 'Do I feel lucky?'", "Absolute Power", "Dirty Harry", "The Gauntlet", "Unforgiven", "B"],
    ["'Right turn, Clyde.'", "Every Which Way But Loose", "Bronco Billy", "Any Which Way You Can", "Firefox", "C"],
    ["'Go ahead, make my day.'", "The Enforcer", "Tightrope", "Magnum Force", "Sudden Impact", "D"],
    ["'Get off my lawn!'", "The Mule", "Million Dollar Baby", "Gran Torino", "The Bridges Of Madison County", "C"],
    ["'Everybody's got a right to be a sucker… once.'", "Two Mules For Sister Sara", "In The Line Of Fire", "Unforgiven", "The Dead Pool", "A"],
    ["''Bout time this town had a new sheriff.'", "Unforgiven", "High Plains Drifter", "The Rookie", "City Heat", "B"],
    ["'Dyin' ain't much of a living, boy.'", "Escape From Alcatraz", "Joe Kidd", "Kelly's Heroes", "The Outlaw Josey Wales", "D"],
    ["'My mule don't like people laughing.'", "For A Few Dollars More", "The Good, The Bad, And The Ugly", "A Fistful Of Dollars", "Hang 'Em High", "C"],
    ["'A man's got to know his limitations.'", "High Plains Drifter", "Magnum Force", "The Beguiled", "Kelly's Heroes", "B"],
    ["'Don't call me buddy, pal, or sweetheart.'", "The Eiger Sanction", "A Perfect World", "Trouble With The Curve", "Pale Rider", "A"],
];

function _(x) {
    return document.getElementById(x);


};
function renderQuestion() {
    test = _("test");
    if (index >= questions.length) {
        $("#seconds").hide();
        stop();
        test.innerHTML = "<h2>You correctly answered " + correct + "  of " + questions.length + " questions.</h2>";
        _("test_status").innerHTML = "Yay! All done!";
        index = 0;
        correct = 0;
        // Gets link for audio:
        var audio = document.createElement("audio");
        audio.setAttribute("src", "assets/good_bad_ugly.wav");

        // Plays audio file for losing "roar":
        audio.play();
        return false;
    }
    _("test_status").innerHTML = "Question #" + (index + 1) + " of " + questions.length + ":";

    question = questions[index][0];
    chA = questions[index][1];
    chB = questions[index][2];
    chC = questions[index][3];
    chD = questions[index][4];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit</button>";
};

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }

    if (choice === questions[index][5]) {
        correct++;
    }
    index++;
    renderQuestion();

};
window.addEventListener("load", renderQuestion, false);

