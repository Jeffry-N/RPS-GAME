function getComputerChoice() {
    let ranNum = Math.random();

    if (ranNum < 0.33) {
        return "rock";
    } else if (ranNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors? ");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice == computerChoice) {
            return "You tie! " + humanChoice + " = " + computerChoice;
        } else if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")
        ) {
            humanScore++;
            return "Congratulations you won! " + humanChoice + " > " + computerChoice;
        } else {
            computerScore++;
            return "Unfortunately you lost! " + humanChoice + " < " + computerChoice;
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    console.log(`Final Score: Human ${humanScore} - ${computerScore} Computer`);

    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

playGame();
