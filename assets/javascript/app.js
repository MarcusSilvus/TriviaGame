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
 var timeOut = 0;
 var timer = 20;
 var intervalId;
//----------------  Questions ---------------------------------------
// Make an object of questions and answers
var qNa = {
    one: {
        question: "Who cut off Ned Stark's head?",
        correctAnswer: "2",
        options: ["Sandor Clegane","Gregor Clegane","Ilyn Payne","Joffrey Baratheon"],
        image: '../images/ilynpayne.jpeg' 
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
        function countDown () {
            intervalId = setInterval(decrement, 1000);
        }
        function decrement () {
            timer--;
            $('#row3').html('<h3>' + timer + '</h3>');        
        }
        countDown();
        
        // Question
        $('#row4').text(qNa.one.question);
        // List of answers
        for (var i = 0; i < qNa.one.options.length; i++) {
            $('#row' + (6+i)).text(qNa.one.options[i]);      
        }
        // if user selects correct answer, Question Screen goes to Result Screen
        $('.form-check-input').on('click', function() {
            var userGuess = $(this);
            if (userGuess === qNa.one.correctAnswer) {
                console.log("correct");
       
            }
        })
    })

// Hover function to make answer light up
    $('#answers').hover()

// On click function to select answer - 

// else if timer runs out, Question Screen goes to Result Screen
// else Question Screen goes to Result Screen



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
