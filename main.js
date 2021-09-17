window.onload = function () {
    getTime()
}



function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10  
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('realTime').innerHTML = h + ":" + m + ":" + s;
    setTimeout(function () {
        getTime()
    }, 1000);
}
//setInterval("getTime()",1000);//another way  
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function css(e, styles) {
    for (const property in styles)
        e.style[property] = styles[property];
}



   // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes
  


var form = document.getElementById("myForm");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);

var info1 = false;
var info2 = false;
var player1 = false;
var player2 = false;
var play = false;



function plycom() {
    clean();
    reset()
    var playcom = `<div class="playercreidential" id="plycom" style="color: darkgoldenrod;">
    <h3>Player Info</h3>
    <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
        <select name="position" id="position" required>
        <option value="">As..</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select></span>
        <input type="text" class="form-control" placeholder="Playername" aria-label="Playername" aria-describedby="addon-wrapping" required name="playercom">

    </div>
    
    <div class="input-group mb-3 computer">
        <select name="symbol" id="symbol" required>
            <option value="">pick...</option>
            <option value="X" ">X</option>
            <option value="O" ">O</option>
        </select>
    </div>

<button type="submit" class="btn btn-primary playbtn" id="go" btn-lg btn-block
        onclick="ComputerstartGame()">Play</button>
</div>`;

    document.getElementById("myForm").innerHTML = playcom;
    document.getElementById("go").addEventListener("click", required);
    
    player1 = true;
    player2 = false;

}

function required() {
    var symbol = document.getElementById("symbol").value;
    var position = document.getElementById("position").value;
    selectSym(symbol);
    var empt = document.form1.playercom.value;

    if (empt === "" || symbol === "" || position === "") {
        info1 = false;
    } else {
        info1 = true;
    }
}

function plyply() {
    clean();
    reset()
    var playerplayer = `
    <div class="playercreidential" id="plyply" style="color: darkgoldenrod;">
        <h3>Player Info</h3>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
            <select name="position" id="position" onclick = "pos()" required>
        <option value="">As..</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select></span>
            <input type="text" class="form-control" placeholder="Playername" aria-label="Playername"  name="player1player" aria-describedby="addon-wrapping" required>

        </div>
        <div class="input-group mb-3 computer">
            <select name="symbol" id="symbol" required>
                <option value="">pick...</option>
                <option value="X">X</option>
                <option value="O">O</option>
            </select>
        </div><br>
        <div class="input-group flex-nowrap">
            <div class="input-group-text position" id="pos" ></div>
            <input type="text" class="form-control" placeholder="Playername" aria-label="Playername" aria-describedby="addon-wrapping" name="player2player" required>

        </div>

        <button type="submit" class="btn btn-primary playbtn" id="go" btn-lg btn-block
            onclick="startGame()">Play</button>

    </div>
`;
    document.getElementById("myForm").innerHTML = playerplayer;
    document.getElementById("go").addEventListener("click", requiredplayer);
    
    player1 = false;
    player2 = true;


    
}
var x;
var o;
function pos() {
    requiredplayer();
    var position = document.form1.position.value === '1' ? '2' : '1';
    document.getElementById("pos").textContent = position;
}
function requiredplayer() {
    
    x = document.form1.symbol.value === 'X' ? document.form1.player1player.value : document.form1.player2player.value
    o = document.form1.symbol.value === 'O' ? document.form1.player1player.value : document.form1.player2player.value
    var empt1 = document.form1.player1player.value;
    var empt2 = document.form1.player2player.value;
    var emptsym = document.form1.symbol.value;
    var emptpos = document.form1.position.value;

    if (empt1 === "" || empt2 === "" || emptsym === "" || emptpos === "") {
        info2 = false;
    } else {
        info2 = true;
    }
}


var t = 0;
var flage = true;
var check = true;
var gamestop = false;
var gameover = false;

// document.getElementById("go").addEventListener("click", go)
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("resume").addEventListener("click", resume);

var starttime = false;

function go() {
    // starttime = true;
    if (flage) {
        t = t + 1;
        document.getElementById('timmer').innerHTML = t + "s";
        setTimeout(function () {
            go()
        }, 1000);
    } else {
        flage = false;

    }

}

function color() {
    if (stopcol) {

        document.querySelector('.stop').style.background = "#dea7a3";
        document.querySelector('.reset').style.background = "white";
        document.querySelector('.resume').style.background = "white";

    } else if (resetcol) {

        document.querySelector('.reset').style.background = "#dea7a3";
        document.querySelector('.resume').style.background = "white";
        document.querySelector('.stop').style.background = "white";

    } else if (resumecol) {

        document.querySelector('.resume').style.background = "#dea7a3";
        document.querySelector('.stop').style.background = "white";
        document.querySelector('.reset').style.background = "white";

    } else {
        document.querySelector('.resume').style.background = "white";
        document.querySelector('.stop').style.background = "white";
        document.querySelector('.reset').style.background = "white";
    }
}
var stoptime = false;

function stop() {
    stoptime = true;
    if (play) {
        stopcol = true;
        resumecol = false;
        resetcol = false;
        color();
        if (gameover) {
            flage = false;
            document.getElementById('timmer').innerHTML = t + "s";
            // setMessage("Wait!!");
        } else {
            flage = false;
            setMessage("Click On Resume Button");
            // gamestop = true;


        }
    } else {
        setMessage("Click On Play Button!!")
    }
}

function reset() {
    if (play) {
        stopcol = false;
        resumecol = false;
        resetcol = true;
        color();

        for (var i = 0; i <= 8; i = i + 1) {
            clearBox(i);
        }
        flage = false;
        go();
        check = true;
        t = 0
        document.getElementById('timmer').innerHTML = " ";
        setMessage("")
        setWinner("")
        setScore("")
        play = false;
    } else {
        setMessage("Click On Play Button!!");
        play = false;
    }
    // flage = true;
}


function resume() {
    stoptime = false;
    if (play) {
        stopcol = false;
        resumecol = true;
        resetcol = false;
        color();


        if (gameover) {
            setMessage("Game Start");
        } else {

            if (stoptime) {
                setMessage("Stop Mode!!!" + `It's ` + document.turn + "'s turn!");
                
            } else {
                flage = true;
                go();
                setMessage(document.turn + " gets to start.")

            }
        }
    } else {
        setMessage("Click On Play Button!!")
    }
}

function clean() {
    document.getElementById('timmer').innerHTML = " ";
    setMessage("");
    setWinner("");
    setScore("");
    for (var i = 0; i <= 8; i = i + 1) {
        clearBox(i);
    }
}

// function symbol() {
//     if (player1) {
//         var sym = document.getElementById("symbol").value;

//     } else {
//         var sym = document.getElementById("symbol").value;
//         selectSym(sym);
//     }
// }

var stopcol = false;
var resetcol = false;
var resumecol = false;

// function play with other player() {
function startGame() {
    reset();
    // flage = false;

    t = 0;
    stoptime = false;
    document.getElementById('timmer').innerHTML = " ";

    requiredplayer();
    var scroll = `<a href="#main" Style = "color:White">Play</a>`
        document.getElementById("go").innerHTML = scroll;

    if (info2) {
        
        setCompetitor(document.form1.player1player.value + "   vs   " + document.form1.player2player.value)
        play = true;
        flage = true;
        go();
        for (var i = 0; i <= 8; i = i + 1) {
            clearBox(i);
        }
        document.getElementById('timmer').innerHTML = " ";
        setMessage("")
        setWinner("")
        setScore("")
        stopcol = false;
        resumecol = false;
        resetcol = false;
        color();
        
        document.turn = document.form1.position.value === '1' ? document.form1.symbol.value : (document.form1.symbol.value === 'X' ? 'O' : 'X');
        player2 = document.turn === 'O' ? 'X' : 'O';
        document.winner = null;
        setMessage(document.turn + " gets to start.");
        document.getElementById("0").style.color = "rgb(58 61 72)";
        document.getElementById("1").style.color = "rgb(58 61 72)";
        document.getElementById("2").style.color = "rgb(58 61 72)";
        document.getElementById("3").style.color = "rgb(58 61 72)";
        document.getElementById("4").style.color = "rgb(58 61 72)";
        document.getElementById("5").style.color = "rgb(58 61 72)";
        document.getElementById("6").style.color = "rgb(58 61 72)";
        document.getElementById("7").style.color = "rgb(58 61 72)";
        document.getElementById("8").style.color = "rgb(58 61 72)";
    } else {
        setMessage("Fill the Player Name!!");
        setCompetitor(" ")
    }
}

// }

function setMessage(msg) {
    document.getElementById("message").textContent = msg;
}

function setWinner(msg) {
    document.getElementById("winner").textContent = msg;
}

function setScore(msg) {
    document.getElementById("score").textContent = msg;
}

function setCompetitor(msg) {
    document.getElementById("competitor").textContent = msg;
}


function nextMove(square) {
    if (play && !stoptime) {
        if (document.winner != null) {
            setMessage("That Square is Already Used.");
        } else if (square.textContent == "") {
            square.textContent = document.turn;
            switchTurn();
        } else {
            setMessage("That Square is Already Used.")
        }
    } else {
        setMessage("Click On Play Button!!")
    }
}





function switchTurn() {
    if (checkForWinner(document.turn)) {
        play = false;
        if (document.turn === "X") {
            document.winner = x;
        } else {
            document.winner = o;
        }

        setWinner("Congratulations " + document.winner + "! You Win!");
        setScore("Time : " + t + "s" + "     " + document.winner + "   " + "Get 1 Point");
        gameover = true;
        flage = false;
        stop();
        stopcol = false;
        resumecol = false;
        resetcol = false;
        color();


    } else
    if (CheckforTie()) {
        play = false;

        setWinner("Its a TIE..!! Play again...!!!");
        setScore("Time : " + t + "s");
        gameover = true;
        flage = false;
        stop();


    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
    } else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");
    }
}

function checkForWinner(move) {
    var result = false;
    if (checkRow(0, 1, 2, move) || checkRow(3, 4, 5, move) ||
        checkRow(6, 7, 8, move) || checkRow(0, 3, 6, move) || checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) || checkRow(0, 4, 8, move) || checkRow(2, 4, 6,
            move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById(number).textContent;
}

function clearBox(number) {
    document.getElementById(number).textContent = "";
}

function CheckforTie() {
    for (var i = 0; i < 9; i++) {
        if (getBox(i) == "")
            return false;
    }
    return true;
}
// }

// ///////////////////////////////////////////////////
////////////////////////////// player with computer

let origBoard;
let huPlayer = 'O';
let aiPlayer = 'X';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6]
];

const cells = document.querySelectorAll('.Square');
// ComputerstartGame();




function selectSym(sym) {
    huPlayer = document.form1.symbol.value === 'X' ? 'X' : 'O';
    aiPlayer = sym === 'O' ? 'X' : 'O';
    var position = document.form1.position.value;
    
    origBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', turnClick, false);
    }

    if (position === '2') {
        turn(bestSpot(), aiPlayer);
    }
    // document.querySelector('.selectSym').style.display = "none";
}


function ComputerstartGame() {
    reset();
    // flage = false;

    t = 0;
    stoptime = false;
    document.getElementById('timmer').innerHTML = " ";

    required();
    var scroll = `<a href="#main" Style = "color:White">Play</a>`
    document.getElementById("go").innerHTML = scroll;
    if (info1) {
        setCompetitor(document.form1.playercom.value + "   vs   " + "Computer")
        play = true;
        flage = true;
        go();
        document.getElementById('timmer').innerHTML = " ";
        setMessage("")
        setWinner("")
        setScore("")
        stopcol = false;
        resumecol = false;
        resetcol = false;
        color();
        // document.querySelector('.endgame').style.display = "none";
        // document.querySelector('.endgame .text').innerText ="";
        // document.querySelector('.selectSym').style.display = "block";
        // document.turn = huPlayer;
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerText = '';
            // cells[i].style.removeProperty('background-color');
        }
        document.getElementById("0").style.color = "rgb(58 61 72)";
        document.getElementById("1").style.color = "rgb(58 61 72)";
        document.getElementById("2").style.color = "rgb(58 61 72)";
        document.getElementById("3").style.color = "rgb(58 61 72)";
        document.getElementById("4").style.color = "rgb(58 61 72)";
        document.getElementById("5").style.color = "rgb(58 61 72)";
        document.getElementById("6").style.color = "rgb(58 61 72)";
        document.getElementById("7").style.color = "rgb(58 61 72)";
        document.getElementById("8").style.color = "rgb(58 61 72)";

    } else {
        setMessage("Fill the Player Name!!");
        setCompetitor(" ")
    }
}


function turnClick(square) {
    if (play && !stoptime) {

        if (typeof origBoard[square.target.id] === 'number') {
            turn(square.target.id, huPlayer);
            if (!checkWin(origBoard, huPlayer) && !checkTie())
                turn(bestSpot(), aiPlayer);
        }
    } else {
        setMessage("Click on Play Button!!!")

    }
}

function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerHTML = player;
    let gameWon = checkWin(origBoard, player);
    if (gameWon) gameOver(gameWon);
    checkTie();
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {
                index: index,
                player: player
            };
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    // for (let index of winCombos[gameWon.index]) {
    //     document.getElementById(index).style.backgroundColor =
    //         gameWon.player === huPlayer ? "blue" : "red";
    // }
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player === huPlayer ? document.getElementById("playercom").value : "Computer");
}

function declareWinner(who) {
    // document.querySelector(".endgame").style.display = "block";
    // document.querySelector(".endgame .text").innerText = who;
    // document.winner = who;

    play = false;
    document.winner = who;
    setWinner("Congratulations " + document.winner + "! Win!");
    setScore("Time : " + t + "s" + "     " + document.winner + "   " + "Get 1 Point");
    gameover = true;
    flage = false;
    stop();
    stopcol = false;
    resumecol = false;
    resetcol = false;
    color();

}

function emptySquares() {
    return origBoard.filter((elm, i) => i === elm);
}

function bestSpot() {
    return minimax(origBoard, aiPlayer).index;
}

function checkTie() {

    if (emptySquares().length === 0) {
        for (items of cells) {
            // cell.style.backgroundColor = "#dea7a3";
            items.removeEventListener('click', turnClick, false);
        }
        // declareWinner("Tie game");
        // play = false;       
        setWinner("Its a TIE..!! Play again...!!!");
        setScore("Time : " + t + "s" + "  No One Win!!!   ");
        // setScore("Time : " + t + "s");
        // gameover = true;
        // flage = false;
        // stop();
        return true;
    }
    // play = false;

    //     // setWinner("Its a TIE..!! Play again...!!!");
    //     setScore("Time : " + t + "s");
    //     gameover = true;
    //     flage = false;
    //     stop();
    return false;


}

function minimax(newBoard, player) {
    var availSpots = emptySquares(newBoard);

    if (checkWin(newBoard, huPlayer)) {
        return {
            score: -10
        };
    } else if (checkWin(newBoard, aiPlayer)) {
        return {
            score: 10
        };
    } else if (availSpots.length === 0) {
        return {
            score: 0
        };
    }

    var moves = [];
    for (let i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player === aiPlayer)
            move.score = minimax(newBoard, huPlayer).score;
        else
            move.score = minimax(newBoard, aiPlayer).score;
        newBoard[availSpots[i]] = move.index;
        if ((player === aiPlayer && move.score === 10) || (player === huPlayer && move.score === -10))
            return move;
        else
            moves.push(move);
    }

    let bestMove, bestScore;
    if (player === aiPlayer) {
        bestScore = -1000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        bestScore = 1000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}
