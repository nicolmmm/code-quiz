var myCountdown=document.getElementById("timerElement")
var question= document.getElementById("question")
var answerOne= document.getElementById("answerOne")
var answerTwo= document.getElementById("answerTwo")
var answerThree= document.getElementById("answerThree")
var answerFour= document.getElementById("answerFour")
var startButton= document.getElementById("startButton")




var timerCount
var timeInterval;

function startTimer(){
        timerCount=60
         timeInterval= setInterval(function(){
        timerCount--;
    myCountdown.textContent=timerCount;
    if(timerCount===0){
        clearInterval(timeInterval);
        console.log("it works")
    }
    
    },1000)
}


startButton.addEventListener("click", startQuiz)


function startQuiz(){
    startTimer();
    questionOne()
}

    function questionOne(){
    question.textContent=questionsObject.questionOne;
    answerOne.textContent=questionOneAnswers[0]
    answerTwo.textContent=questionOneAnswers[1]
    answerThree.textContent=questionOneAnswers[2]
    answerFour.textContent=questionOneAnswers[3]

    
questionTwo
}

function questionTwo(){
    question.textContent=questionsObject.questionTwo;
    answerOne.textContent=questionTwoAnswers[0]
    answerTwo.textContent=questionTwoAnswers[1]
    answerThree.textContent=questionTwoAnswers[2]
    answerFour.textContent=questionTwoAnswers[3]

    

}




var questionsObject= {
questionOne: "Inside which HTML element do we put the JavaScript?",
questionTwo: "Where is the correct place to insert a JavaScript?",
questionThree: "Inside which HTML element do we put the JavaScript?",
questionFour: "Inside which HTML element do we put the JavaScript?",

}

var questionOneAnswers= [
    "<js>","<script>","<scriptong>","[javascript]"
]

var questionTwoAnswers= [
    "The <head> section","Both the <head> and the <body> section"," The <body>","The <javascript> section"
]


