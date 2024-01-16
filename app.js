let randomBtn = [];
let userBtn = [];
let start = false;
let level = 0;
let boxs = document.querySelectorAll(".box");
let h2 = document.querySelector('h2');

let body = document.querySelector('body');
body.addEventListener("keypress", () => {
  if (start == false) {
    start = true;
    level = 0;
    h2.innerText = `Level ${level}`;
    setTimeout(levelUp, 1000);
  }
});

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    let userCol = box.getAttribute('id');
    if (start) {
      randomFlash(userCol);
      userBtn.push(userCol);
      if (userCol === randomBtn[userBtn.length-1]) {
        if (userBtn.length === level) {
          setTimeout(levelUp, 1000);
        }
      } else {
           reset();
      }
    }
  })
})

let reset=()=>{
  userBtn=[];
  randomBtn=[];
  start=false;
  body.style.backgroundColor = "red";
  setTimeout(() => {
    body.style.backgroundColor = "white";
  },50);
  h2.innerHTML=`Game is Over. Your Score was <b>${level} <b><br> Press any key to restart.`;
  level=0;
}

let randomFlash = (color) => {
  let btn = document.querySelector(`#${color}`);
  btn.style.backgroundColor = "white";
  setTimeout(() => {
    btn.style.backgroundColor = color;
  },400);
}


let levelUp = () => {
  userBtn = [];
  let choice = ["red", "green", "blue", "yellow"];
  level++;
  h2.innerText = `Level ${level}`;
  let idx = Math.floor(Math.random() * 4);
  let randCol = choice[idx];
  randomBtn[randomBtn.length] = randCol;
  console.log(randomBtn);
  randomFlash(randCol);
}