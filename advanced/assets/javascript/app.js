var timerSeconds = 3;
var intervalId;
var displayQuestion = 0;
var numCorrectAnswers = 0;
var unanswered = 0;
var incorrect = 0;

var myListofQuestions = [
     {
         question: "What's the capital of Alabama?",
         choices: ["Helena", "Birmingham", "Tuscaloosa", "Montgomery"],
         correctChoice: "Montgomery"
    },
    {
         question: "What's the capital of Nebraska?",
         choices: ["Omaha", "Lincoln", "Norfolk", "Kearney"],
         correctChoice: "Lincoln"
    },
    {
         question: "What's the capital of New Jersey?",
         choices: ["Trenton", "Newark", "Jersey City", "Princeton"],
         correctChoice: "Trenton"
    },
    {
        question: "What's the capital of California?",
        choices: ["San Francisco", "Los Angeles", "San Jose", "Sacramento"],
        correctChoice: "Sacramento"
    }
];


function startGame () {
    $("#startGameButton").toggleClass("hidden");
    $("#gameWrapper").toggleClass("hidden");
    showQuestion();
}

function showQuestion() {

    //need an if else statement to see if we're on last question. Use toggle to hide and show this info. If we are, display grand total if not run this code.

    if (displayQuestion === myListofQuestions.length) {
        $("#gameWrapper").toggleClass("hidden");
        $("#correct").html(numCorrectAnswers);
        $("#incorrect").html(incorrect);
        $("#unanswered").html(unanswered);
        $("#resultsWrapper").toggleClass("hidden");


    } else {
        myQuestion = "";
        myQuestion = myQuestion + "<p class='bold'>" + myListofQuestions[displayQuestion].question + "</p>";
        myListofQuestions[displayQuestion].choices.forEach(function(choice) {
            myQuestion = myQuestion + "<input type='radio' name=" + displayQuestion + " value=" + choice + ">" + choice + "<br>";
        });
        $("#myForm").html(myQuestion);
        run();
    }


}

function next() {
    displayQuestion++;

    $("#currentAnswer").toggleClass("hidden");
    $("#gameWrapper").toggleClass("hidden");

    showQuestion();


}


$("#gameWrapper").click(function(event) {

    showAnswer();

//right wrong or ran out of time

    //next();

});

function gradeMe () {

    stop();

    var isItChecked = $("input[name =" + displayQuestion +"]:checked").val();
    //alert(isItChecked);

    console.log(isItChecked);
    console.log(myListofQuestions[displayQuestion].correctChoice);

    if (isItChecked === myListofQuestions[displayQuestion].correctChoice) {
        $("#currentAnswer").html("Correct!");
        numCorrectAnswers++;


    } else if (isItChecked === undefined){
        $("#currentAnswer").html("You didn't make a choice. Out of time! The correct answer is: " + myListofQuestions[displayQuestion].correctChoice);
        unanswered++;

    } else {
        $("#currentAnswer").html("Wrong! The correct answer is: " + myListofQuestions[displayQuestion].correctChoice);
        incorrect++;

    }

    setTimeout(function(){ next(); }, 3000);
    timerSeconds = 3;

}

function showAnswer (){

    stop();

    gradeMe();

    $("#currentAnswer").toggleClass("hidden");
    $("#gameWrapper").toggleClass("hidden");


    //set time out and then run the next() function.

    //test if it;s the last question that they've just answered display results else display question.

}


function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    $("#showNumber").html(timerSeconds);
    if (timerSeconds === 0) {
        showAnswer();
    }
    timerSeconds--;

}



function stop() {
    clearInterval(intervalId);
}




//TODO: when we get to the last question, show final result (i.e. how many right, how many wrong...) The code I have to display this will need to go into a function.
