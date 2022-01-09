const btns = document.querySelectorAll(".rps-btn");
console.log(btns);


// COMPUTER PLAY ARRAY
function computerPlay(){
    const pickOne = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor((Math.random()*3)+0);
    return pickOne[random];
}


function printEvent(ev){
    if(ev.target);
}

btns.forEach(ele => ele.addEventListener("click", printEvent));