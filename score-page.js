var yourScoreSpan= document.getElementById("yourScore")
var userScore= localStorage.getItem("userScore")
var textInput= document.getElementById("textInput").value;
var submitButton=document.getElementById("submit")
var scoreUl=document.getElementById("highscores")

yourScoreSpan.innerText=JSON.parse(userScore)
var li= document.createElement("li");

var myComp=


submitButton.addEventListener("click", ()=> {
li.value=  (document.getElementById("textInput").value) + " scored " + yourScoreSpan ;
scoreUl.append(li);
})
