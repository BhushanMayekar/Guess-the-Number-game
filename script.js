let correctNumber=getRandomNumber();
let guesses=[];
console.log(correctNumber)

window.onload=function(){
    document.getElementById("checkButton").addEventListener("click",playGame);
    document.getElementById("restartButton").addEventListener("click",initGame);
}

function initGame(){
    correctNumber=getRandomNumber();
    document.getElementById("result").innerHTML="";
    document.getElementById("history").innerHTML="";
    document.getElementById("numberBox").value="";
    guesses=[];
}

function playGame(){
    let numberGuess=document.getElementById("numberBox").value;
    displayRes(numberGuess);
    saveGuessHistory(numberGuess);
}

function saveGuessHistory(guess){
    guesses.push(guess);
    displayHistory()
}

function displayHistory(){
    let historyHtml="<ul class='list-group'>"
    for(let index=guesses.length-1;index>=0;index--){
        historyHtml+="<li class='list-group-item'>";
        historyHtml+="Your guessed is "+guesses[index].toString();
        historyHtml+="</li>";
    } 
    historyHtml+="</ul>";
    document.getElementById("history").innerHTML=historyHtml;
}

function displayRes(numberGuess){
    if(numberGuess==correctNumber){
        showYouWon();
    }
    else if(numberGuess<correctNumber){
        showNumSmall();
    }
    else{
        showNumBig();
    }
}

function showYouWon(){
    let text="<div id='resw'class='alert alert-success' role='alert'>Awesome job, you got it!</div>";
    document.getElementById("result").innerHTML=text;
}
function showNumSmall(){
    let text="<div id='reslow' class='alert alert-warning' role='alert'> Your guess is too low! </div>";
    document.getElementById("result").innerHTML=text;
}
function showNumBig(){
    let text="<div id='reshigh' class='alert alert-warning' role='alert'> Your guess is too High! </div>";
    document.getElementById("result").innerHTML=text;
}


function getRandomNumber(){
    return Math.floor(Math.random()*100)+1;
}
