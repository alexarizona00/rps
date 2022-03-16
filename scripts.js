let playerChoice = prompt("Choice your weapon : Rock, Paper, Scissors")

console.log(playerChoice)

let cpuChoices = ["rock", "paper", "scissors"]

let cpuDecision = Math.floor(Math.random() * cpuChoices.length);

let finalAttack = cpuChoices[cpuDecision]

console.log(finalAttack)


confirm("You have chosen " + playerChoice + " Press OK to Enter Battle")

confirm("The Computer chose " + finalAttack + "!")

finalAttack = finalAttack.toUpperCase()

playerChoice = playerChoice.toUpperCase()

let gameOutcome = 0;
let cpuWins = 0;
let cpuLoss = 0;

if (playerChoice == 'ROCK') {
    if (finalAttack == 'ROCK') {
        alert("You have tied, choose your weapon again")
      location.reload()
    }
    else if (finalAttack == 'PAPER') {
        alert("You have lost")
      
    }
    else if (finalAttack == "SCISSORS") {
        alert("you have won!")
      
    }
}
if (playerChoice == 'PAPER') {
    if (finalAttack == 'PAPER') {
        alert("You have tied, choose your weapon again")
        location.reload()
    }
    else if (finalAttack == 'SCISSORS') {
        alert("You have lost")
      
    }
    else if (finalAttack == "ROCK") {
        alert("you have won!")
      
    }
} if (playerChoice == 'SCISSORS') {
    if (finalAttack == 'SCISSORS') {
        alert("You have tied, choose your weapon again")
        location.reload()
    }
    else if (finalAttack == 'ROCK') {
        alert("You have lost")
      
    }
    else if (finalAttack == "PAPER") {
        alert("you have won!")
      
    }
}