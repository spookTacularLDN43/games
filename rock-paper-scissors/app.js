const computerChoiceDisplay = document.getElementById("computer-choice"); 
const userChoiceDisplay = document.getElementById("user-choice"); 
const resultDisplay = document.getElementById("result"); 
let userChoice; 
let computerChoice; 
let result; 
const possibleChoices = document.querySelectorAll("button"); 

possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener("click", (e) =>{
userChoice = e.target.id; 
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice(); 
getResult()
}))

function generateComputerChoice (){
const randomNumber = Math.floor(Math.random() * possibleChoices.length); 

if(randomNumber === 0){
    computerChoice = "rock"; 
}
if(randomNumber === 1){
    computerChoice = "paper"; 
}
if(randomNumber === 2){
    computerChoice = "scissors"; 
}
computerChoiceDisplay.innerHTML = computerChoice; 
}

function getResult(){

    if(computerChoice === userChoice){
    result = "it's a draw!";
    }
    if(computerChoice === "rock" && userChoice === "paper"){
        result = "you win";
        }
    if(computerChoice === "rock" && userChoice === "scissors"){
        result = "you lose";
        }
    if(computerChoice === "paper" && userChoice === "scissors"){
        result = "you win";
        }
    if(computerChoice === "paper" && userChoice === "rock"){
        result = "you lose";
        }
    if(computerChoice === "scissors" && userChoice === "rock"){
        result = "you win";
        }
    if(computerChoice === "scissors" && userChoice === "paper"){
        result = "you lose"; 
        }
    
    resultDisplay.innerHTML = result; 
}
