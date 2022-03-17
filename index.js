var myCountdown=document.getElementById("timerElement")
var question= document.getElementById("question")
var answerOne= document.getElementById("answerOne")
var answerTwo= document.getElementById("answerTwo")
var answerThree= document.getElementById("answerThree")
var answerFour= document.getElementById("answerFour")
var startButton= document.getElementById("startButton")

var score=0;

var timerCount
var timeInterval;

function startTimer(){
    startButton.style.display="none";
        timerCount=60
         timeInterval= setInterval(function(){
        timerCount--;
    myCountdown.textContent=timerCount;
    if(timerCount<=0){
        clearInterval(timeInterval);
        localStorage.setItem("userScore", score)
        alert("you ran out of time")
        window.location.href = "score-page.html";
    }
    
    },1000)
}


startButton.addEventListener("click", startQuiz)


function startQuiz(){
    startTimer();
    questionOne()
}




function correctAnswerOne(){
    score++;
    questionTwo()
}

function correctAnswerTwo(){
        score++;
questionThree()
}

function correctAnswerThree(){
            score++;
            questionFour()
}

function correctAnswerFour(){
    score++;
    questionFive();
}

function correctAnswerFive(){
    score++;
    clearInterval(timeInterval)
    localStorage.setItem("userScore", score)
    alert("quiz complete");
    window.location.href = "score-page.html";
}

function incorrectAnswer(){
    timerCount=timerCount-10;
}

    function questionOne(){
    question.textContent=questionsObject.questionOne;
    answerOne.textContent=questionOneAnswers[0]
    answerTwo.textContent=questionOneAnswers[1]
    answerThree.textContent=questionOneAnswers[2]
    answerFour.textContent=questionOneAnswers[3]

    answerOne.addEventListener("click", incorrectAnswer)
    answerTwo.addEventListener("click",correctAnswerOne )
    answerThree.addEventListener("click", incorrectAnswer)
    answerFour.addEventListener("click", incorrectAnswer)    
}

function questionTwo(){
    question.textContent=questionsObject.questionTwo;
    answerOne.textContent=questionTwoAnswers[0]
    answerTwo.textContent=questionTwoAnswers[1]
    answerThree.textContent=questionTwoAnswers[2]
    answerFour.textContent=questionTwoAnswers[3]

    answerOne.addEventListener("click", incorrectAnswer)
    answerTwo.addEventListener("click",incorrectAnswer)
    answerThree.addEventListener("click", correctAnswerTwo)
    answerFour.addEventListener("click", incorrectAnswer)  

    

}

function questionThree(){
    question.textContent=questionsObject.questionThree;
    answerOne.textContent=questionThreeAnswers[0]
    answerTwo.textContent=questionThreeAnswers[1]
    answerThree.textContent=questionThreeAnswers[2]
    answerFour.textContent=questionThreeAnswers[3]

    answerOne.addEventListener("click", correctAnswerThree)
    answerTwo.addEventListener("click", incorrectAnswer)
    answerThree.addEventListener("click", incorrectAnswer)
    answerFour.addEventListener("click", incorrectAnswer)  

    

}

function questionFour(){
    question.textContent=questionsObject.questionFour;
    answerOne.textContent=questionFourAnswers[0]
    answerTwo.textContent=questionFourAnswers[1]
    answerThree.textContent=questionFourAnswers[2]
    answerFour.textContent=questionFourAnswers[3]

    answerOne.addEventListener("click", incorrectAnswer)
    answerTwo.addEventListener("click",correctAnswerFour)
    answerThree.addEventListener("click", incorrectAnswer)
    answerFour.addEventListener("click", incorrectAnswer)   

}

function questionFive(){
    question.textContent=questionsObject.questionFive;
    answerOne.textContent=questionFiveAnswers[0]
    answerTwo.textContent=questionFiveAnswers[1]
    answerThree.textContent=questionFiveAnswers[2]
    answerFour.textContent=questionFiveAnswers[3]

    answerOne.addEventListener("click", incorrectAnswer)
    answerTwo.addEventListener("click", incorrectAnswer)
    answerThree.addEventListener("click", incorrectAnswer)
    answerFour.addEventListener("click", correctAnswerFive)   

}




var questionsObject= {
questionOne: "Inside which HTML element do we put the JavaScript?",
questionTwo: "Where is the correct place to insert a JavaScript source?",
questionThree: "What is the correct syntax for referring to an external script called 'xxx.js?'",
questionFour: "How do you write 'Hello World' in an alert box?",
questionFive: "How to write an IF statement in JavaScript?"

}

var questionOneAnswers= [
    "<js>","<script>","<scriptong>","[javascript]"
]

var questionTwoAnswers= [
    "The <head> section","Both the <head> and the <body> section"," The <body>","The <javascript> section"
]

var questionThreeAnswers= [
    "<script src='xxx.js'>","<script href='xxx.js>'","<script name='xxx.js>'","[script src='xxx.js'] "
]

var questionFourAnswers= [
    "alertBox('Hellow World')","alert('Hello World')","msg('Hello World')","msgBox('Hello World')"
]

var questionFiveAnswers= [
    "if i=5","if i=5 then","if i == 5","if (i == 5)"
];
;

