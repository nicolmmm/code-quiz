//clear scores button and functions
var clearScoresButton=document.querySelector("#clearScores");
clearScoresButton.addEventListener("click", clearScoresFunc )

function clearScoresFunc(){
    scoreUl.innerHTML=""
}

//play again button and function to redirect back to page
var playAgainButton=document.getElementById("playAgain");

playAgainButton.addEventListener("click", playAgain)

function playAgain(){
    
    window.location.href = "index.html"
}

//grabbing remainder of elements on page
var yourScoreSpan= document.getElementById("yourScore")
var userScore= localStorage.getItem("userScore")
var textInput= document.getElementById("textInput").value;
var submitButton=document.getElementById("submit")
var li= document.createElement("li")
var scoreUl=document.querySelector("#highscores")

//retrieving score from previous page
yourScoreSpan.innerText=JSON.parse(userScore)


function checkTextInput(){
    return document.getElementById("textInput").value
}

var savedScore;

submitButton.addEventListener("click", ()=>{
    if(checkTextInput()===""){return}
    li.append(checkTextInput()+ " scored " + userScore +" points" );
     savedScore= scoreUl.appendChild(li);
    localStorage.setItem("myHighscores", JSON.stringify(savedScore))
    document.getElementById("textInput").value="";
    

})
