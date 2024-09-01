let mainFormSubmitButton = document.getElementsByClassName("main-form-submit-button");
let mainForm = document.getElementsByClassName("main-form");
let playerDetailsDiv = document.getElementsByClassName("player-details-div");
let player1Name = document.getElementById("player1-name");
let player2Name = document.getElementById("player2-name");
let DisplayPlayer1Name = document.getElementById("display-player1-name");
let DisplayPlayer2Name = document.getElementById("display-player2-name");
let turnDetail = document.getElementById("turn-detail");
let playerTurnDetail = document.getElementsByClassName("player-turn-detail");
let grid = document.getElementsByClassName("grid");
let cell1 = document.getElementsByClassName("cell1");
let cell2 = document.getElementsByClassName("cell2");
let cell3 = document.getElementsByClassName("cell3");
let cell4 = document.getElementsByClassName("cell4");
let cell5 = document.getElementsByClassName("cell5");
let cell6 = document.getElementsByClassName("cell6");
let cell7 = document.getElementsByClassName("cell7");
let cell8 = document.getElementsByClassName("cell8");
let cell9 = document.getElementsByClassName("cell9");
let i = 0;
let winnerDetailPlayer = document.getElementById("winner-detail-player");

function Winner1() {
  turnDetail.innerText = "";
  grid[0].setAttribute("style", "display:none");
  winnerDetailPlayer.innerText = "Player 1 ("+player1Name.value+") Wins!"
}

function Winner2() {
  turnDetail.innerText = "";
  grid[0].setAttribute("style", "display:none");
  winnerDetailPlayer.innerText = "Player 2 ("+player2Name.value+") Wins!"
}

function Draw() {
  turnDetail.innerText = "";
  grid[0].setAttribute("style", "display:none");
  winnerDetailPlayer.innerText = "Match Draws!"
}

function checkPattern() {
  if(cell1[0].innerText===cell2[0].innerText && cell2[0].innerText===cell3[0].innerText && cell1[0].innerText!="") {
    if(cell1[0].innerText=="X") {
      Winner1();
    } else {
      Winner2();
    }
  } else if(cell4[0].innerText===cell5[0].innerText && cell5[0].innerText===cell6[0].innerText && cell4[0].innerText!="") {
    if(cell1[0].innerText=="X") {
      Winner1();
    } else {
      Winner2();
    }
  } else if(cell7[0].innerText===cell8[0].innerText && cell8[0].innerText===cell9[0].innerText && cell7[0].innerText!="") {
    if(cell1[0].innerText=="X") {
      Winner1();
    } else {
      Winner2();
    }
  } else if(cell1[0].innerText===cell4[0].innerText && cell4[0].innerText===cell7[0].innerText && cell1[0].innerText!="") {
    if(cell1[0].innerText=="X") {
      Winner1();
    } else {
      Winner2();
    }
  } else if(cell2[0].innerText===cell5[0].innerText && cell5[0].innerText===cell8[0].innerText && cell2[0].innerText!="") {
    if(cell1[0].innerText=="X") {
      Winner1();
    } else {
      Winner2();
    }
  } else if(cell3[0].innerText===cell6[0].innerText && cell6[0].innerText===cell9[0].innerText && cell3[0].innerText!="") {
    if(cell1[0].innerText=="X") {
      Winner1();
    } else {
      Winner2();
    }
  } else if(cell1[0].innerText===cell5[0].innerText && cell5[0].innerText===cell9[0].innerText && cell1[0].innerText!="") {
    if(cell1[0].innerText=="X") {
      Winner1();
    } else {
      Winner2();
    }
  } else if(cell3[0].innerText===cell5[0].innerText && cell5[0].innerText===cell7[0].innerText && cell3[0].innerText!="") {
    if(cell1[0].innerText=="X") {
      Winner1();
    } else {
      Winner2();
    }
  } else if(cell1[0].innerText!="" && cell2[0].innerText!="" && cell3[0].innerText!="" && cell4[0].innerText!="" && cell5[0].innerText!="" &&
    cell6[0].innerText!="" && cell7[0].innerText!="" && cell8[0].innerText!="" && cell9[0].innerText!="") {
      Draw();
    }
}

function turnPlayer() {
  if(i%2==0) {
    turnDetail.innerText = "Player 1 ("+player1Name.value+") turns to play."
    i++;
  } else {
    turnDetail.innerText = "Player 2 ("+player2Name.value+") turns to play."
    i++;
  }
}
function submitButtonClicked() {
  let player1Name = document.getElementById("player1-name");
  let player2Name = document.getElementById("player2-name");
  if(player1Name.value && player2Name.value) {
    mainForm[0].setAttribute("style", "display: none");
    playerDetailsDiv[0].setAttribute("style", "display:block");
    playerTurnDetail[0].setAttribute("style", "display:block");
    grid[0].setAttribute("style", "display:grid");
    DisplayPlayer1Name.innerText = "Player 1 Name : " + player1Name.value;
    DisplayPlayer2Name.innerText = "Player 2 Name : " + player2Name.value;
    turnPlayer();
  } else {
    alert("Enter name properly.");
  }
}

function cell1Clicked() {
  turnPlayer();
  if(i%2==0) {
    cell1[0].innerText = "X";
  } else {
    cell1[0].innerText = "O";
  }
  checkPattern();
}
function cell2Clicked() {
  turnPlayer();
  if(i%2==0) {
    cell2[0].innerText = "X";
  } else {
    cell2[0].innerText = "O";
  }
  checkPattern();
}
function cell3Clicked() {
  turnPlayer();
  if(i%2==0) {
    cell3[0].innerText = "X";
  } else {
    cell3[0].innerText = "O";
  }
  checkPattern();
}
function cell4Clicked() {
  turnPlayer();
  if(i%2==0) {
    cell4[0].innerText = "X";
  } else {
    cell4[0].innerText = "O";
  }
  checkPattern();
}
function cell5Clicked() {
  turnPlayer();
  if(i%2==0) {
    cell5[0].innerText = "X";
  } else {
    cell5[0].innerText = "O";
  }
  checkPattern();
}
function cell6Clicked() {
  turnPlayer();
  if(i%2==0) {
    cell6[0].innerText = "X";
  } else {
    cell6[0].innerText = "O";
  }
  checkPattern();
}
function cell7Clicked() {
  turnPlayer();
  if(i%2==0) {
    cell7[0].innerText = "X";
  } else {
    cell7[0].innerText = "O";
  }
  checkPattern();
}
function cell8Clicked() {
  turnPlayer();
  if(i%2==0) {
    cell8[0].innerText = "X";
  } else {
    cell8[0].innerText = "O";
  }
  checkPattern();
}
function cell9Clicked() {
  turnPlayer();
  if(i%2==0) {
    cell9[0].innerText = "X";
  } else {
    cell9[0].innerText = "O";
  }
  checkPattern();
}

mainFormSubmitButton[0].addEventListener("click", submitButtonClicked);
cell1[0].addEventListener("click", cell1Clicked, {once: true});
cell2[0].addEventListener("click", cell2Clicked, {once: true});
cell3[0].addEventListener("click", cell3Clicked, {once: true});
cell4[0].addEventListener("click", cell4Clicked, {once: true});
cell5[0].addEventListener("click", cell5Clicked, {once: true});
cell6[0].addEventListener("click", cell6Clicked, {once: true});
cell7[0].addEventListener("click", cell7Clicked, {once: true});
cell8[0].addEventListener("click", cell8Clicked, {once: true});
cell9[0].addEventListener("click", cell9Clicked, {once: true});