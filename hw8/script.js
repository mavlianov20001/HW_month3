//1
const phoneInput = document.querySelector("#inp")
const phoneCheck = document.querySelector(".btn")
const phoneResult = document.querySelector(".span")

 const regExp = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.(com|ru)$/

phoneCheck.addEventListener("click", ()=>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerText = "Коректно :)"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerText = "Не Коректно :("
        phoneResult.style.color = "red"
    }
})

//2
const block = document.querySelector('.absolute')

let p = 0
function big() {
    block.style.left = `${p}px`
    p++
    if (p < 450)  {
        setTimeout(big, 1)
    }
}
big()