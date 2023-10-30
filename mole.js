let currMoleTile;
let currHaileyTile;
let score = 0;
let gameOver = false;
window.onload = function() {
    setGame();
}

function setGame(){
    //set up the grid
    for (let i = 0; i < 9; i++) {
        //div 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000); // 1 seconds
    setInterval(setHailey, 2000); // 2 seconds
}

function getRandomTile() {
    //randomizer
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){
    if (gameOver) {
        return;
    }
    
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./haileyMole-PhotoRoom.png";

    let num = getRandomTile();
    if (currHaileyTile && currHaileyTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setHailey() {
    if (gameOver) {
        return;
    }

    if (currHaileyTile) {
        currHaileyTile.innerHTML = "";
    }

    let hailey = document.createElement("img");
    hailey.src = "./haileyCool-PhotoRoom.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile == num) {
        return;
    }
    currHaileyTile = document.getElementById(num);
    currHaileyTile.appendChild(hailey);
}

function selectTile() {
    if (gameOver) {
        return;
    }

    if (this == currMoleTile) {
        score+= 10;
        document.getElementById("score").innerText = score.toString(); // scores points
    }
    else if (this == currHaileyTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

