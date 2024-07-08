let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg-container");
let a = 0;
let innertext;
let gameEnded = false;
boxes.forEach((box) => {
  box.onclick = () => {
    if (!gameEnded && box.innerText === "") {
      if (a % 2 === 0) {
        innertext = "X";
      } else if (a % 2 !== 0) {
        innertext = "O";
      }
      box.innerHTML = innertext;
      a++;
      check();
    }
  };
});
boxes.forEach((box) => {
  if (box.innerHTML !== "") {
  }
});

let winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

function check() {
  for (let i = 0; i <= 7; i++) {
    let j = 0;

    if (
      boxes[winningPatterns[i][j]].innerHTML === "X" &&
      boxes[winningPatterns[i][j + 1]].innerHTML === "X" &&
      boxes[winningPatterns[i][j + 2]].innerHTML === "X"
    ) {
      msg.innerHTML = " X is the winner";
      console.log(" X is the winner");
      gameEnded = true;
    } else if (
      boxes[winningPatterns[i][j]].innerHTML === "O" &&
      boxes[winningPatterns[i][j + 1]].innerHTML === "O" &&
      boxes[winningPatterns[i][j + 2]].innerHTML === "O"
    ) {
      msg.innerHTML = " O is the winner";
      console.log("O is the winner");
      gameEnded = true;
    }
  }
  let draw = true;

  boxes.forEach((box) => {
    if (box.innerHTML === "") {
      draw = false;
    }
  });

  if (draw && !gameEnded) {
    msg.innerHTML = " Game is a draw";
    console.log("Game is a draw");
    gameEnded = true;
  }
}
