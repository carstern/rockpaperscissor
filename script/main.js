// Koppla knapparna
let rockBtn = document.getElementById("rock-btn");
let paperBtn = document.getElementById("paper-btn");
let scissorBtn = document.getElementById("scissor-btn");
let startBtn = document.getElementById("start-btn");
// Koppla feedback där feedbackElement ska skapas
let feedback = document.getElementById("feedback");

//Knyt knapparna till en siffra som vi kan koppla på en ifsats sen
const numberToString = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};
//Deklarera en variabel för datorns val
let computerChoice;

//Skapa en funktion som genererar ett random nummer till datorn
function randomComputerChoice(userChoice) {
  const choiceNames = ["Rock", "Paper", "Scissors"];
  const createComputerChoice = Math.floor(Math.random() * 3) + 1;
  const name = choiceNames[createComputerChoice - 1];
  console.log(userChoice);
  console.log(name);
  return { number: createComputerChoice, name: name };
};
// startBtn.addEventListener("click", function(){
//Generera ett tal mellan 1 och 3 kopplat till computerChoice
// computerChoice = Math.floor((Math.random() * 3) + 1);
// console.log(computerChoice); // kolla så att det genereras
rockBtn.addEventListener("click", function(){
  randomComputerChoice("rock")

});
paperBtn.addEventListener("click", function(){
  randomComputerChoice("paper")

});
scissorBtn.addEventListener("click", function(){
  randomComputerChoice("scissor")

});
//ifsats för det du vinner på och en else på resten
//if player === som computer - oavgjort
if (randomComputerChoice === userChoice){
let equal = document.createElement('p');
equal.textContent = "Oh, you chose the same, try again!";
  //=== samma som datorn
}else if{
// allt jag vinner
}else );
//datorn vinner



//en funktion per knapp som printar ut vald knapp
//funktion generera computerChoice med math.random


  
//Testa funktionen
// const result = randomComputerChoice();
// let resultInfo = document.createElement("p");
// resultInfo.textContent = `You chose Rock, computer chose ${result.name}`;
// feedback.appendChild(resultInfo);
//Kalla på funktionen vid knapptryck
//Hantera resultatet i en ifsats, bestäm vad som ska visas och när



//presentera rock + computerchoice i feedback
// let resultInfo = document.createElement("p");
// resultInfo.textContent = `You chose Rock, computer chose ${computerChoice}`;
// feedback.appendChild(resultInfo);
//ifsats där scissor vinner över paper
//ifsats där paper vinner över rock
//ifsats där rock vinner över scissor
