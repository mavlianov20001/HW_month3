const litleBlock = document.querySelector(".litle");

let postionX = 0;
let postionY = 0;

const move = () =>{
if (litleBlock < 400 ) {
  postionX++;
  litleBlock.style.left `${postionX}px`
  setTimeout(move, 200)
}}
move()

let number= 0
function timer(){
    number++
    console.log(number)
    if (number >= 60){
        clearInterval(counter)}
}
const counter = setInterval(timer, 1000)


move();