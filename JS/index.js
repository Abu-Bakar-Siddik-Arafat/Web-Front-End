let countEl= document.getElementById("count-el")
let toEl=document.getElementById("total-el")
let count=0
let tl=7
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
    
    console.log(count)
    toEl.innerText=count
}

function reset(){
    count = 0
    countEl.innerText=count
}