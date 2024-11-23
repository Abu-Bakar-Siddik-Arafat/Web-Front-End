let countEl= document.getElementById("count-el")
let toEl=document.getElementById("total-el")
let welcomeEl=document.getElementById("welcome-el")
let resetEl=document.getElementById("resetMgs-el")
let count=0
let dash = " - "
let mgs="Welcome!!!"
let resetMgs="Reset Successfully"
console.log(mgs)
welcomeEl.innerText=mgs
function welcomeMgs(){
    
}
function increment(){
    count+=1
    console.log(count)
    countEl.innerText=count
}

function decrement(){
    count-=1
    console.log(count)
    countEl.innerText=count
}

function save(){
    let tCounter =" " + count + dash
    toEl.innerText+= tCounter
    console.log(tCounter)
    count=0
    countEl.textContent=count
    resetEl.innerText=""
}

function reset(){
    count = 0
    countEl.innerText=count
    resetEl.textContent=resetMgs
}