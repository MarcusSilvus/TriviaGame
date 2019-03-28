// When the mouse hovers over the question, it changes color

// If the correct answer is selected, Question Screen is replaced with Result Screen
// informing the player that they are correct along w/ an image

// If the incorrect answer is selected, Question Screen is replaced with Result Screen
// informing the player that they are wrong accompanied by the correct answer w/ and image

// If the timer runs out, the Queston Screen is replaced by with the Results Scrren 
// informing the player that time is up accompanied by the correct answer w/ and image

// After 5 seconds, the Result Screen is replaced by another question screen

// When all the questions have been answered, a Score Sceen will replace the final
// Result Screen displaying the amount the player got right, wrong and unanswered

//----------------  Varibles  --------------------------------------
var right = 0;
var wrong = 0;
var timeUp = 0;
var resultTime = 5;
var timer = 21;
var intervalId;
//----------------  Questions ---------------------------------------
// Make an object of questions and answers
var questionIndex = 0;
var qNa = [
    {
        question: "Who cut off Ned Stark's head?",
        correctAnswer: "Ilyn Payne",
        options: ["Sandor Clegane", "Gregor Clegane", "Ilyn Payne", "Joffrey Baratheon"],
        image: "assets/images/ilynpayne.jpeg"
    },

    {
        question: "Who is the author of the Game of Thrones?",
        correctAnswer: "George R. R. Martin",
        options: ["George R. Martin", "George R. R. Martin", "George R. R. R. Martin", "George R. R. R. R. Martin"],
        image: "assets/images/george.jpg"
    },

    {
        question: "Which is not one of Daenerys' dragons?",
        correctAnswer: "Dracarys",
        options: ["Drogon", "Rhaegal", "Viserion", "Dracarys"],
        image: "assets/images/dragon.jpg"
    },

    {
        question: "Who is Robert Baratheon's biological child?",
        correctAnswer: "Gendry",
        options: ["Gendry", "Podrick", "Joffrey", "Jon Snow"],
        image: "assets/images/gendry.jpg"
    },

    {
        question: "Who is Sansa Stark's first husband?",
        correctAnswer: "Tyrion Lannister",
        options: ["Ramsay Bolton", "Joffrey Baratheon", "Tyrion Lannister", "Petyr Baelish"],
        image: "assets/images/sansa.jpeg"
    },

    {
        question: "?",
        correctAnswer: "Dracarys",
        options: ["Drogon", "Rhaegal", "Viserion", "Dracarys"],
        image: "assets/images/dragon.jpg"
    }
]

// $(document).ready(() => {
//----------------  Home Screen  --------------------------------------

// Start button to begin the game
$('.startBtn').on('click', function () {

    // Start button disappears - DONE but would like to add a page divider
    $('#row5').html('<hr>');
    nextQuestion();
    
})

// Timer counting down from 20 seconds 
function countDown() {
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    timer--;
    $('#row3').html('<h4>' + timer + '</h4>');
    if (timer <= 0) {
        timeUp++;
        // if timer runs out, Question Screen goes to Result Screen
        clearInterval(intervalId);
        $('#row3').html('<hr>');
        $('#row4').html('<h3>Time\'s Up! The correct answer is</h3>');
        $('#row5').html('<h3>' + qNa[questionIndex].correctAnswer + '</h3>');
        $('#row6').html("<img src='" + qNa[questionIndex].image + "'>");
        $('#row7').html('<hr>');
        $('#row8').html('<hr>');
        $('#row9').html('<hr>');
        questionIndex++;
        timer = 21;
        setTimeout(nextQuestion, 3000);
    }
}

//----------------  Question Screen   ------------------------------------
function nextQuestion() {
    // Question
    $('#row4').text(qNa[questionIndex].question);
    // List of answers
    countDown();
    for (var i = 0; i < qNa[questionIndex].options.length; i++) {
        $('#row' + (6 + i)).text(qNa[questionIndex].options[i]);
        $('#row5').html('<hr>');
    }
}

// On click function to select answer
$('.answers').on('click', function () {
    var userGuess = $(this).text();
    // if user selects correct answer, Question Screen goes to Result Screen
    if (userGuess === qNa[questionIndex].correctAnswer) {
        right++;
        clearInterval(intervalId);
        $('#row3').html('<hr>');
        $('#row4').html('<h2>Correct!</h2>');
        $('#row5').html('<h3>' + qNa[questionIndex].correctAnswer + '</h3>');
        $('#row6').html("<img id='none' src='" + qNa[questionIndex].image + "'>");
        $('#row7').html('<hr>');
        $('#row8').html('<hr>');
        $('#row9').html('<hr>');
        questionIndex++;
        timer = 21;
        setTimeout(nextQuestion, 3000);

    }
    // else Question Screen goes to Result Screen
    else {
        wrong++;
        clearInterval(intervalId);
        $('#row3').html('<hr>');
        $('#row4').html('<h3>Wrong! The correct answer is</h3>');
        $('#row5').html('<h3>' + qNa[questionIndex].correctAnswer + '</h3>');
        $('#row6').html("<img src='" + qNa[questionIndex].image + "'>");
        $('#row7').html('<hr>');
        $('#row8').html('<hr>');
        $('#row9').html('<hr>');
        questionIndex++;
        timer = 21;
        setTimeout(nextQuestion, 3000);
    }
})


//----------------   Score Screen   --------------------------------------

// Display how many correct, wrong and timed out
