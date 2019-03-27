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
var resultTime = 5;
var timer = 21;
var intervalId;
//----------------  Questions ---------------------------------------
// Make an object of questions and answers
var qNa = {
    one: {
        question: "Who cut off Ned Stark's head?",
        correctAnswer: "Ilyn Payne",
        options: ["Sandor Clegane", "Gregor Clegane", "Ilyn Payne", "Joffrey Baratheon"],
        image: "assets/images/ilynpayne.jpeg"
    },

    two: {
        question: "Who is the author of the Game of Thrones?",
        correctAnswer: "George R. R. Martin",
        options: ["George R. Martin", "George R. R. Martin", "George R. R. R. Martin", "George R. R. R. R. Martin"],
        image: "assets/images/ilynpayne.jpeg"
    }
}

// $(document).ready(() => {
//----------------  Home Screen  --------------------------------------

// Start button to begin the game
$('.startBtn').on('click', function () {

    //----------------  Question Screen   ------------------------------------

    // Start button disappears - DONE but would like to add a page divider
    $('#row5').html('<hr>');

    // Timer counting down from 20 seconds 
    function countDown() {
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        timer--;
        $('#row3').html('<h4>' + timer + '</h4>');
        if (timer <= 0) {
            console.log("times up");
            // if timer runs out, Question Screen goes to Result Screen
            clearInterval(intervalId);
            $('#row3').html('<h2>Time\'s Up!</h2>');
            $('#row4').html('<h3>The correct answer is</h3>');
            $('#row5').html('<h3>' + qNa.one.correctAnswer + '</h3>');
            $('#row6').html("<img src='" + qNa.one.image + "'>");
            $('#row7').html('<hr>');
            $('#row8').html('<hr>');
            $('#row9').html('<hr>');

        }
    }
    // Result screen timer counting down from 5 seconds 

    countDown();

    // Question
    $('#row4').text(qNa.one.question);
    // List of answers
    for (var i = 0; i < qNa.one.options.length; i++) {
        $('#row' + (6 + i)).text(qNa.one.options[i]);
    }


    // On click function to select answer
    $('.answers').on('click', function () {
        var userGuess = $(this).text();
        // if user selects correct answer, Question Screen goes to Result Screen
        if (userGuess === qNa.one.correctAnswer) {
            console.log("correct");
            clearInterval(intervalId);
            $('#row3').html('<h2>Correct!</h2>');
            $('#row4').html('<hhr>');
            $('#row5').html('<h3>' + qNa.one.correctAnswer + '</h3>');
            $('#row6').html("<img src='" + qNa.one.image + "'>");
            $('#row7').html('<hr>');
            $('#row8').html('<hr>');
            $('#row9').html('<hr>');
        }
        // else Question Screen goes to Result Screen
        else {
            console.log("incorrect");
            clearInterval(intervalId);
            $('#row3').html('<h2>Wrong!</h2>');
            $('#row4').html('<h3>The correct answer is</h3>');
            $('#row5').html('<h3>' + qNa.one.correctAnswer + '</h3>');
            $('#row6').html("<img src='" + qNa.one.image + "'>");
            $('#row7').html('<hr>');
            $('#row8').html('<hr>');
            $('#row9').html('<hr>');
        }
    })
})

// Hover function to make answer light up
$('.answers').hover(function () {
    $(this).toggleClass('active');
});

// function nextQuestion() {
//     $('#row4').text(qNa.two.question);
//     // List of answers
//     for (var i = 0; i < qNa.two.options.length; i++) {
//         $('#row' + (6 + i)).text(qNa.two.options[i]);
//     }
// }


//----------------   Result Screen   --------------------------------------

// Hidden timer counting down from 5 seconds 
// when timer is done, next Question Screen displays

// if user chose correct answer
// "You are correct!" w/ picture

// else if time ran out
// "Times up! The correct answer is: " w/ picture

// else (user chose wrong)
// "Wrong! The correct answer is: " w/ picture

//----------------   Score Screen   --------------------------------------

// Display how many correct, wrong and timed out
