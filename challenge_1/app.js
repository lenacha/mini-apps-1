var toggle = [false, false, false, false, false, false, false, false, false];
var turn = 'p1';
var score1 = 0;
var score2 = 0;
var player1;
var player2;

var turnChange = () => {
  var elem = document.getElementById('turn');
  var user;
  if(turn !== 'p1') {
    user = player1
  } else {
    user = player2
  }
  elem.innerHTML = 'Your turn! :  ' +user;
}
var scoreRender = () => {
  var elem1 = document.getElementById('score1');
  var elem2 = document.getElementById('score2');
  elem1.innerHTML = 'score: ' + score1;
  elem2.innerHTML = 'score: ' + score2;
}

var player_1 = function() {
  player1 = prompt("Please enter your name", "Player 1");
  var elem = document.getElementById('play1');
  if (player1 !== null) {
    elem.innerHTML = player1 + ' : O';
  } else {
    elem.innerHTML = 'Player 1 : O';
  }
}

var player_2 = function() {
  player2 = prompt("Please enter your name", "Player 2");
  var elem = document.getElementById('play2');
  if (player2 !== null) {
    elem.innerHTML = player2 + ' : X';
  } else {
    elem.innerHTML = 'Player 2 : X';
  }
}

var clicked = (event) => {
  var id = event.id; 
  idArr = JSON.parse(id);
  var index = (idArr[0] * 3) + idArr[1]
  toggle[index] = !toggle[index];
  turnChange()
  if (!toggle[index]) {
    board[idArr[0]][idArr[1]] = 0;
  }
  var elem = document.getElementById(id)
  if (toggle[index]) {
    if (turn === 'p1') {
      board[idArr[0]][idArr[1]] = 1;
      turn = 'p2';
      elem.innerHTML = 'O';
      this.checkWin();
      return;
    } else if (turn === 'p2') {
      turn = 'p1';
      board[idArr[0]][idArr[1]] = 7;
      elem.innerHTML = 'X';
      this.checkWin();
      return;
    }
  } else if (!toggle[index]) {
    board[idArr[0]][idArr[1]] = 0;
    if (turn === 'p1') {
      turn = 'p2';
    } else {
      turn = 'p1';
    }
    return elem.innerHTML = ' ';
  }
}

var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

var checkWin = () => {
  var sum = 0;
  var sum1 = 0;
  var sum2 = 0;
  var sum3 = 0;
  var majorDiagonal = 0;
  var minorDiagonal = 0;
  for (var i = 0; i < board.length; i++) {
    sum1 += board[i][0];
    if (sum1 === 3) {
      alert(`${player1} win`)
      score1++;
      scoreRender();
      resetGame();
      return;
    } else if (sum1 === 21) {
      alert(`${player2} win`)
      score2++
      scoreRender();
      resetGame();
      return;
    }

    sum2 += board[i][1];
    if (sum2 === 3) {
      alert(`${player1} win`)
      score1++;
      scoreRender();
      resetGame();
      return;
    } else if (sum2 === 21) {
      alert(`${player2} win`)
      score2++
      scoreRender();
      resetGame();
      return;
    }

    sum3 += board[i][1];
    if (sum3 === 3) {
      alert(`${player1} win`)
      score1++;
      scoreRender();
      resetGame();
      return;
    } else if (sum3 === 21) {
      alert(`${player2} win`)
      score2++
      scoreRender();
      resetGame();
      return;
    }

    for (var j = 0; j < board[i].length; j++) {
      sum += board[i][j];
      if (sum === 3) {
        alert(`${player1} win`)
        score1++;
        scoreRender();
        resetGame();
        return;
      } else if (sum === 21) {
        alert(`${player2} win`)
        score2++
        scoreRender();
        resetGame();
        return;
      }
      if(i===j) {
        majorDiagonal += board[i][j];
        if (majorDiagonal === 3) {
          alert(`${player1} win`);
         score1++;
         scoreRender();
         resetGame();
          return;
        } else if (majorDiagonal === 21) {
          alert(`${player2} win`);
          score2++
          scoreRender();
          resetGame();
          return;
        }
      }
      if(Math.abs(i-j) === 2 || ( i===1 && j ===1)) {
        minorDiagonal += board[i][j];
        if (minorDiagonal === 3) {
          alert(`${player1} win`);
          score1++;
          scoreRender();
          resetGame();
          return;
        } else if (minorDiagonal === 21) {
          alert(`${player2} win`);
          score2++
          scoreRender();
          resetGame();
          return;
        }
      }
    }
    sum = 0;
    diagonal = 0;
  }
}

var resetGame = () => {
  toggle = [false, false, false, false, false, false, false, false, false];
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  var elem = document.getElementsByClassName("grid-item")
  for (var item of elem) {
    item.innerHTML = ' ';
  }
}

player_1();
player_2();
turnChange();
scoreRender();