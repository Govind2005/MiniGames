const boxes = document.querySelectorAll('.box')
let timeleft = document.querySelector('#time-left')
let points = 0
let currId = 0
let paintimer
let changetimer
let countertimer 
let painhit = 0
let popupEl = document.getElementById('popup')
popupEl.classList.add('ppopen')

function change()
{
   currId = Math.floor(Math.random()*boxes.length)
    boxes.forEach(box => {
        box.classList.remove('mole')
        box.removeEventListener('click',attack)
    })
    boxes[currId].classList.add('mole')
    boxes[currId].addEventListener('click',attack)
}

function attack() {
    points++
    this.classList.remove('mole')
    this.classList.add('hit-mole')
    paintimer = setInterval(pain,20)
    boxes[currId].removeEventListener('click',attack)
}

function pain() 
{ 
    painhit++
    if(painhit > 10){
        painhit = 0
        let temp = document.querySelector('.hit-mole')
        temp.classList.remove('hit-mole')
        clearInterval(paintimer)
    }
}

function counter() {
    timeleft.innerHTML--
    if(timeleft.innerHTML == 0){
        document.querySelector('.score').classList.add('score-open')
        document.getElementById('result').innerHTML = points
        clearInterval(changetimer)
        clearInterval(countertimer)
        
    }
}

function begin() {
    let blurred = document.querySelectorAll('.blur')
    blurred.forEach(removeblur);
    popupEl.classList.remove('ppopen')
    changetimer = setInterval(change,500)
    countertimer = setInterval(counter,1000)
}

function removeblur(item) {
    item.classList.remove('blur')
}

function restart() {
    timeleft.innerHTML = 60
    points = 0
    document.getElementById('score').innerHTML =  points
}

