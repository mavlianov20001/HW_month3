let button = document.querySelector(".btn")
let items = document.querySelector(".items")



button.onclick = () => {
     fetch('data.json')
     .then(req => req.json())
     .then(data => {
          data.forEach(item => {
               const div = document.createElement('div')
                    div.innerHTML = `
                    <div class="card">
                         <img src="${item.img}">
                         <h2>${item.name}</h2>
                         <span>${item.price}</span>
                    </div>
                    `
                    items.append(div)
               })
     })
}
