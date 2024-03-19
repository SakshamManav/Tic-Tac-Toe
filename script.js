let btns = document.querySelectorAll(".btn");
let count = 0;
let currentValue = "X";
let msg = document.querySelector(".msg");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.innerHTML !== "") return;
    btn.innerHTML = currentValue;
    currentValue = currentValue === "X" ? "O" : "X";
    count++;
    let check = checkWinner();
    
     if (count === 9 && check) {
        checkWinner();
      }
      else if(count===9 && !check){
        msg.innerHTML = "It's a draw";
      }
      
  });
});

 


btndis = () => {
  for (let btn of btns) {
    btn.disabled = true;
    btn.style.backgroundColor="lightgrey"
  }
};


checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = btns[pattern[0]].innerHTML;
    let pos2 = btns[pattern[1]].innerHTML;
    let pos3 = btns[pattern[2]].innerHTML;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        msg.innerHTML = `${pos1} is the winner !`;
        btndis();
        
      }
    }
  }
};
