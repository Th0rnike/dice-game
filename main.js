var randNum1 = Math.floor(Math.random() * 6) + 1
var randNum2 = Math.floor(Math.random() * 6) + 1

let dice1 = document.querySelector(".img1")
let dice2 = document.querySelector(".img2")

dice1.setAttribute("src", `./images/dice${randNum1}.png`)
dice2.setAttribute("src", `./images/dice${randNum2}.png`)

let text = document.querySelector("h1")

if(randNum1 > randNum2){
    text.textContent = "Player 1 Wins"
}else if(randNum1 < randNum2){
    text.textContent = "Player 2 Wins"
}else{
    text.textContent = "Draw"
}