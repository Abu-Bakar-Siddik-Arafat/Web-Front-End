let countEl= document.getElementById("count-el")
let toEl=document.getElementById("total-el")
let welcomeEl=document.getElementById("welcome-el")
let count=0
let dash = " - "
let mgs="Welcome!!!"
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
}

function reset(){
    count = 0
    countEl.innerText=count
}