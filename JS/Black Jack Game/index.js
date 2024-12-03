/* let age =21

if(age =>21){
    console.log("Welcome!!")
}
else{
    console.log("You can not enter the club")
} */
let messageEl=document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let firstCard = 10
let secondCard = 5

let sum = firstCard + secondCard

let hasBlackjack=false
let isAlive = true
let message =""
let thirdCard = 5

//conditions

function startGame(){
    cardEl.textContent= "Cards: "+ firstCard + " " +secondCard
    sumEl.textContent = "Sum: "+ sum
    if (sum<=20){
        message =("Do you want to draw another card?")
    }
    else if(sum === 21){
        message =("You've got the Blackjack!!!")
        hasBlackjack = true
    }
    else {
        message =("You're out of the game")
        isAlive = false
    }
    messageEl.textContent=message
}

function newCard(){
    sum +=thirdCard
    startGame()
}


