let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newbtn = document.querySelector('#new');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let count = 0;
let turnO = true;

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

const resetGame = () => {
  turnO = true;
  for(let box of boxes){
    box.disabled = false;
    box.innerText = '';
    count = 0;
  }
  msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener('click',() => {
    if(turnO) {
      box.innerText = "O";
      turnO = false;
    }
    else {
      box.innerText = "X";
      box.style.color = 'black';
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  })
})

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  for(let box of boxes){
    box.disabled = true;
  }
}

const checkWinner = () => {
  for(let pattern of winPatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    
    if(pos1 != '' && pos2 != '' && pos3 != ''){
      if(pos1 === pos2 && pos2 === pos3){
        showWinner(pos1);
      }
    }
  }
  count++;
  if(count == 9){
    msg.innerText = 'Match Draw';
    msgContainer.classList.remove("hide");
  }
}

newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);