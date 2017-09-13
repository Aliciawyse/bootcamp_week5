var number = 10;
var intervalId;
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

    //write out questions
    myQuestion = "";

    // for (var i = 0; i < myListofQuestions.length; i ++) {
    //
    //     myQuestion = myQuestion + "<p class='bold'>" + myListofQuestions[i].question + "</p>";
    //
    //     for (var j = 0; j < myListofQuestions[i].choices.length; j ++) {
    //         myQuestion = myQuestion + "<input type='radio' name=" + i + " value=" + myListofQuestions[i].choices[j] + ">" + myListofQuestions[i].choices[j] + "<br>";
    //     }
    // }

    //The forEach() method calls a provided function once for each element in an array, in order.
    myListofQuestions.forEach(function(obj,idx) {

        myQuestion = myQuestion + "<p class='bold'>" + obj.question + "</p>";

        obj.choices.forEach(function(choice) {
            myQuestion = myQuestion + "<input type='radio' name=" + idx + " value=" + choice + ">" + choice + "<br>";

            console.log(myQuestion);

        })

    })

    $("#myForm").append(myQuestion);

    run();

}

function gradeMe () {

    stop();

    var numCorrectAnswers = 0;
    var unanswered = 0;
    var incorrect = 0;

    //show choice
    for (var i = 0; i < myListofQuestions.length; i ++) {

        var isItChecked = $("input[name =" + i+"]:checked").val();
        //alert(isItChecked);

        if (isItChecked === myListofQuestions[i].correctChoice) {
            numCorrectAnswers++;
        } else if (isItChecked === "undefined"){
            unanswered++;
        } else {
            incorrect++;
        }
    }


    $("#correct").html(numCorrectAnswers);
    $("#incorrect").html(incorrect);
    $("#unanswered").html(unanswered);
    $("#resultsWrapper").toggleClass("hidden");
    $("#gameWrapper").toggleClass("hidden");

}




function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;

    $("#showNumber").html(number);
    if (number === 0) {
        gradeMe();
    }
}

function stop() {
    clearInterval(intervalId);
}





