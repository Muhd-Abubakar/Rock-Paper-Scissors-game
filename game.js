let userScore=0;
let compScore=0;
let user = document.getElementById("user");
let comp = document.getElementById("comp");
const msg= document.getElementById("msg");

const gencompChoice = () => {
    let options = ["rock","paper","scissor"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}

const draw = (userID, compID) => {
    if(userID === compID)
        return true;
}

const showWinner = (userID, compID) => {
    let userWin = true;
    if(userID === "rock") {
        userWin = compID === "scissor" ? true : false;
    }
    else if(userID === "paper") {
        userWin = compID === "rock" ? true : false;
    }
    else {
        userWin = compID === "rock" ? false : true;
    }
    return userWin;
}

const playGame = (userID, compID) => {
    console.log("user choice= ", userID, "and comp choice=", compID);
    if(draw(userID, compID)) {
        msg.innerText = "DRAW, Try Again";
        msg.style.backgroundColor = "rgb(134, 145, 145)";
        console.log("draw");
    }
    else if(showWinner(userID, compID)) {
        msg.innerText = `YOU WIN!,Your ${userID} beats ${compID}`;
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    }
    else {
        console.log("lose");
        msg.innerText = `YOU LOSE,${compID} beats Your ${userID}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = compScore;
    }
}

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userID = choice.getAttribute("id");
        const compID = gencompChoice(); 
        playGame(userID, compID);
    })
})
