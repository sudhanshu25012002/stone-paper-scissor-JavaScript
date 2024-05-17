let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScoreBoard = document.querySelector("#user-score");
let computerScoreBoard = document.querySelector("#computer-score");

const drawGame = () => {
    msg.innerText = "Game Draw, Try Again"; 
    msg.style.backgroundColor = "#081b31";   
}

const showWinner = (userWin, computerChoice, userChoice) => {
    if (userWin) {
        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        computerScore++;
        computerScoreBoard.innerText = computerScore;
        msg.innerText = `You Lose. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        // game draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, computerChoice, userChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});