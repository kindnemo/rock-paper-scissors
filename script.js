const btns = document.querySelectorAll(".rps-btn");
const playerScore = document.querySelector("#player-score");
const computerScore= document.querySelector("#computer-score");
const history = document.querySelector("#history");
const animatePlayer = document.querySelector("#animate-player");
const animateComputer = document.querySelector("#animate-computer");


let compScore = 0;
let plyrScore = 0;


// COMPUTER PLAY ARRAY
function computerPlay(){
    const pickOne = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor((Math.random()*3)+0);
    return pickOne[random];
}

function playerSelection(ev){
    let selection = ev.target.tagName;
    let selectionFinal;
    if(selection.toUpperCase() == "BUTTON"){
        selectionFinal = ev.target.id.toUpperCase();
    }else{
        let select = ev.target.closest("BUTTON").id;
        selectionFinal = select.toUpperCase();
    }
    
    play(selectionFinal, computerPlay());
}

function play(player, computer){

    animatePlayer.src = `images/${player}.png`
    animateComputer.src = `images/${computer}.png`
    
    let whoWon;

    if(computer == player){
        whoWon = "IT'S A TIE"
        game(player, computer, whoWon);
        return;
    }

    switch (player){
        case "ROCK":
            if(computer == "SCISSORS"){
                plyrScore++;
                whoWon = "Player Wins"
                break;
            }else{
                whoWon = "Computer Wins"
                compScore++;
                break
            }
        
        case "SCISSORS":
            if(computer == "PAPER"){
                whoWon = "Player Wins"
                plyrScore++;
                break;
            }else{
                whoWon = "Computer Wins"
                compScore++;
                break;
            }
        
        case "PAPER":
            if(computer == "ROCK"){
                whoWon = "Player Wins"
                plyrScore++;
                break;
            }else{
                whoWon = "Computer Wins"
                compScore++;
                break;
            }
    }
    game(player, computer, whoWon);
}


function game(_playerSelection, _computerSelection, _whoWon){
    
    computerScore.textContent = compScore;
    playerScore.textContent = plyrScore;
    
    let para = document.createElement("P");
    para.textContent = `Player: ${_playerSelection}, Computer: ${_computerSelection} ${_whoWon}`;
    
    history.appendChild(para);
    
    if(plyrScore == 5){
        console.log("Player Wins");
        plyrScore = 0
        compScore = 0
    }else if(compScore == 5){
        console.log("Computer wins");
        plyrScore = 0
        compScore = 0
    }
    
    
}

btns.forEach(ele => ele.addEventListener("click", playerSelection));