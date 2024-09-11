let scoreOne = document.getElementById("score1")
let scoreTwo = document.getElementById("score2")
let totalOne = 0
let totalTwo = 0
let entriesPrev = document.getElementById("entries")
let entryOld = ""

function addThree1(){
    totalOne = totalOne + 3
    scoreOne.textContent = totalOne
}
function addTwo1(){
    totalOne = totalOne + 2
    scoreOne.textContent = totalOne
}
function addOne1(){
    totalOne = totalOne + 1
    scoreOne.textContent = totalOne
}

function addThree2(){
    totalTwo = totalTwo + 3
    scoreTwo.textContent = totalTwo
}
function addTwo2(){
    totalTwo = totalTwo + 2
    scoreTwo.textContent = totalTwo
}
function addOne2(){
    totalTwo = totalTwo + 1
    scoreTwo.textContent = totalTwo
}

function saveGame(){
    entryOld = entryOld + totalOne + " - " + totalTwo + " | "
    entriesPrev.textContent = entryOld
}

function restartGame(){
    totalOne = 0
    totalTwo = 0
    scoreOne.textContent = totalOne
    scoreTwo.textContent = totalTwo
}