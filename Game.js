let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepapra=document.querySelector("#User-score");
const compScorepapra=document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["Rock", "Paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win");
      
        msg.innerText = `You Win!!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
          userScorepapra.innerText=user_score;
        user_score++;
        userScorepapra.innerText=user_score;
    } else {
        console.log("You Lose!");
        msg.innerText = `You Loose!!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
        comp_score++;
        compScorepapra.innerText=comp_score;
    }
    console.log("User Score:", user_score);
    console.log("Computer Score:", comp_score);
};

const gameDraw = () => {
    console.log("Game was Draw");
    msg.innerText = "Draw!!!";
    msg.style.backgroundColor = "blue";
};

const playGame = (userChoice, compChoice) => {
    console.log("User choice:", userChoice);
    console.log("Computer choice:", compChoice);
    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compChoice = genCompChoice();
        playGame(userChoice, compChoice);
    });
});
