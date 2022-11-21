let count = 0
let entry = document.querySelector("#total")
let messageEl = document.querySelector("#message-el")



function increment(){
  count +=1
  entry.textContent = count
}

function save(){
  let str = count + " - "
  messageEl.textContent += str
  entry.textContent = 0
  count = 0

}
