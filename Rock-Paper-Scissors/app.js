const attack = document.getElementById('attack')
const bet = document.getElementById("bet")
const result = document.getElementById("result")
const possibilities = document.querySelectorAll('button')
let userChoice
let finale

function generateAttack() {
    const point = Math.floor(Math.random()*3) + 1
    // const point = 1
    if(point === 1)
    {
        attack.innerHTML = "rock"
    }
    else if(point === 2)
    {
        attack.innerHTML = 'scissors'
    }
    else if(point === 3)
    {
        attack.innerHTML = 'paper'
    }
    
}


function getResult()
{
    
    if(attack.innerHTML === bet.innerHTML)
    {
        finale = "draw"
    }
    else if (attack.innerHTML === "rock")
    {
        if(bet.innerHTML === "paper")
        {
            finale = "you win"
        }
        else finale = "you lost"
    }
    else if (attack.innerHTML === "paper")
    {
        if(bet.innerHTML === "scissors")
        {
            finale = "you win"
        }
        else finale = "you lost"
    }
    else if (attack.innerHTML === "scissors")
    {
        if(bet.innerHTML === "rock")
        {
            finale = "you win"
        }
        else finale = "you lost"
    }
    result.innerHTML = finale
}

possibilities.forEach(possibilities => possibilities.addEventListener('click',(e) =>{
    userChoice = e.target.id
    bet.innerHTML = userChoice
    generateAttack()
    getResult()
}))

