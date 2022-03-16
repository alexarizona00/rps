let wins = 0;
let losses = 0;
let ties = 0;

let cpuChoices = ["rock", "paper", "scissors"]
function playGame() {
let playerChoice = window.prompt("Choice your weapon : Rock, Paper, Scissors")



let cpuDecision = Math.floor(Math.random() * cpuChoices.length);

let finalAttack = cpuChoices[cpuDecision]

console.log(finalAttack)


confirm("You have chosen " + playerChoice + " Press OK to Enter Battle")

confirm("The Computer chose " + finalAttack + "!")

finalAttack = finalAttack.toUpperCase()

playerChoice = playerChoice.toUpperCase()


if (playerChoice == 'ROCK') {
    if (finalAttack == 'ROCK') {
        ties++;
        alert("You have tied, choose your weapon again")

    }
    else if (finalAttack == 'PAPER') {
        losses++;
        alert("You have lost")

    }
    else if (finalAttack == "SCISSORS") {
        wins++;
        alert("you have won!")

    }
}
if (playerChoice == 'PAPER') {
    if (finalAttack == 'PAPER') {
        ties++;
        alert("You have tied, choose your weapon again")
    }
    else if (finalAttack == 'SCISSORS') {
        losses++;
        alert("You have lost")
    }
    else if (finalAttack == "ROCK") {
        wins++;
        alert("you have won!")

    }
} if (playerChoice == 'SCISSORS') {
    if (finalAttack == 'SCISSORS') {
        ties++;
        alert("You have tied, choose your weapon again")
    }
    else if (finalAttack == 'ROCK') {
        losses++;
        alert("You have lost")
    }
    else if (finalAttack == "PAPER") {
        wins++;
        alert("you have won!")

    }
}

alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
)

let playAgain = confirm("Play Again?");

if (playAgain) {

    playGame();
}
}

playGame();