const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")


const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}


const showTabContent = (i = 3) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

//1
let q = 0;
function slider () {
     const sl = setInterval(()=>{
          q++
          if (q > 3) {
               q = 0
          }
          hideTabContent()
          showTabContent(q)
     }, 2000)
}
slider()


tabsParent.addEventListener("click", (e)=>{
    const target = e.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item) {
                hideTabContent()
                showTabContent(i)
                q = i
            }
        })
    }
})

const modalTrigger = document.querySelector(".btn_white")
const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalCloseBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal")){
        closeModal()
    }
})
//2
const int = () => {
    let page = document.documentElement
    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal()
        document.body.style.overflow = "hidden"
    }
}

window.addEventListener("scroll", int)