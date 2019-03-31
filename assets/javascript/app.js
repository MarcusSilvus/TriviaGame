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
var timer = 11;
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
        question: "Who was Sansa Stark's first husband?",
        correctAnswer: "Tyrion Lannister",
        options: ["Ramsay Bolton", "Joffrey Baratheon", "Tyrion Lannister", "Petyr Baelish"],
        image: "assets/images/sansa.jpeg"
    },

    {
        question: "Which was the decisive battle of Robert's Rebellion?",
        correctAnswer: "Battle of the Trident",
        options: ["Battle of Blackwater Bay", "Battle of the Bastards", "Battle on the Green Fork", "Battle of the Trident"],
        image: "assets/images/trident.jpg"
    },

    {
        question: "Jamie Lannister is known as Kingslayer for killing which king?",
        correctAnswer: "Aerys Targaryen",
        options: ["Aerys Targaryen", "Rhaegar Targaryen", "Viserys Targaryen", "Rob Stark"],
        image: "assets/images/aerys.jpg"
    },

    {
        question: "Where was Lord Varys born?",
        correctAnswer: "Lys",
        options: ["Kings Landing", "Bravos", "Lys", "Myr"],
        image: "assets/images/varys.jpg"
    },

    {
        question: "Who was the Maester at the wall when Jon Snow arrived?",
        correctAnswer: "Maester Aemon",
        options: ["Maester Pycelle", "Maester Aemon", "Maester Cressen", "Maester Luwin"],
        image: "assets/images/aemon.jpg"
    },

    {
        question: "What is the name of Arya Stark's direwolf?",
        correctAnswer: "Nymeria",
        options: ["Grey Wind", "Lady", "Nymeria", "Ghost"],
        image: "assets/images/nymeria.jpg"
    }
]

// $(document).ready(() => {
//----------------  Home Screen  --------------------------------------

// Start button to begin the game
$('.startBtn').on('click', function () {
    // Start button disappears - DONE but would like to add a page divider
    $('#row5').html('<hr>');
    $('.throneImg').hide();
    nextQuestion();

});

function startGame() {
    right = 0;
    wrong = 0;
    timeUp = 0;
    resultTime = 5;
    nextQuestion();
}


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
        $('#row6').attr('class', 'none');
        $('#row6').html("<img src='" + qNa[questionIndex].image + "'>");
        $('#row7').html('<hr>');
        $('#row8').html('<hr>');
        $('#row9').html('<hr>');
        questionIndex++;
        timer = 11;
        setTimeout(nextQuestion, 2000);
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
            $('#row6').attr('class', 'answers');
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
        $('#row6').attr('class', 'none');
        $('#row6').html("<img id='none' src='" + qNa[questionIndex].image + "'>");
        $('#row7').html('<hr>');
        $('#row8').html('<hr>');
        $('#row9').html('<hr>');
        questionIndex++;
        timer = 11;
        setTimeout(nextQuestion, 2000);

    }
    // else Question Screen goes to Result Screen
    else {
        wrong++;
        clearInterval(intervalId);
        $('#row3').html('<hr>');
        $('#row4').html('<h3>Wrong! The correct answer is</h3>');
        $('#row5').html('<h3>' + qNa[questionIndex].correctAnswer + '</h3>');
        $('#row6').attr('class', 'none');
        $('#row6').html("<img src='" + qNa[questionIndex].image + "'>");
        $('#row7').html('<hr>');
        $('#row8').html('<hr>');
        $('#row9').html('<hr>');
        questionIndex++;
        timer = 11;
        setTimeout(nextQuestion, 2000);
    }

      // Display how many correct, wrong and timed out
      if (questionIndex === 10) {
        $('#row3').html('<h2>Game Over</h2>');
        $('#row4').html('<h3>Results:</h3>');
        $('#row5').html('<hr>');
        $('#row7').attr('class', 'none');
        $('#row8').attr('class', 'none');
        $('#row9').attr('id', 'restart');
        $('#row6').html('<h3>Correct: ' + right + '</h3>');
        $('#row7').html('<h3>Incorrect: ' + wrong + '</h3>');
        $('#row8').html('<h3>Unanswered: ' + timeUp + '</h3>');
        $('#row9').html('<button>').on('click', function () {
            console.log($(this));
            
            questionIndex = 0
            startGame();
        }
        );
    }
});



//----------------   New Game    --------------------------------------



