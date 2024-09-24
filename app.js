let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const btn = document.querySelector("#btn");

const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

const drawGame = () => {
  console.log("Draw");
  msg.innerText = "Game Draw..!";
  msg.style.backgroundColor = "#F2C57C";
};

const showWinner = (winner, userChoice, compChoice) => {
  if (winner) {
    userScore++;
    userPara.innerText = userScore;
    msg.innerText = `You Win..! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compPara.innerText = compScore;
    msg.innerText = `You Lose..! ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //generate comp choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

btn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userPara.innerText = 0;
  compPara.innerText = 0;
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "#F2C57C";
});
