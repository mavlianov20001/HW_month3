const litleBlock = document.querySelector(".litle");

let postionX = 0;
let postionY = 0;

const move = () => {
  if (postionX <= 350 && postionY === 0) {
    postionX += 16;
    litleBlock.style.left = `${postionX}px`;
    setTimeout(move, 200);
  } else if (postionX >= 350 && postionY <= 350) {
    postionY += 16;
    litleBlock.style.top = `${postionY}px`;
    setTimeout(move, 200);
  }else if (postionX !== 0 && postionY >= 350) {
    postionX -= 16;
    litleBlock.style.left = `${postionX}px`;
    setTimeout(move, 200);
  }else if (postionX <= 0 && postionY !== 0) {
    postionY -= 16;
    litleBlock.style.top = `${postionY}px`;
    setTimeout(move, 200);
  }
};

let number= 0
function timer(){
    number++
    console.log(number)
    if (number >= 60){
        clearInterval(counter)}
}
const counter = setInterval(timer, 1000)


move();