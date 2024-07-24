const space = document.querySelector('.container')
const max = 392
let currentshippos = 322
let lap = 0
let right = true
let directionptr = 9
let timer
const speed = 100
for (let i = 0; i < max; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    space.appendChild(box)
}

const squares = document.querySelectorAll('.box')

for(let i = 0; i < 20; i++)
{
    const index = Math.floor(Math.random()*300)
    square = squares[index];
    square.classList.add('star')
}

squares[currentshippos].classList.add('ship')
squares[currentshippos].innerHTML = "<img src='images/ship.png'>"
const invader = [
    0,1,2,3,4,5,6,7,8,9,
    37,38,39,40,41,42,43,44,45,46,
    57,58,59,60,61,62,63,64,65,66,
    94,95,96,97,98,99,100,101,102
]

for(let i = 0; i < invader.length; i++)
{
    squares[invader[i]].classList.add('invader')
}
function moveinvader() {
    if(directionptr % 28 !== 27 && right == true)
    {
        for(let i = 0; i < invader.length; i++)
        {
            squares[invader[i]].classList.remove('invader')
            invader[i]++
        }
        directionptr++
    }
    if(directionptr % 28 === 19)right = false
    if(right == false)
    {
        for(let i = 0; i < invader.length; i++)
        {
            squares[invader[i]].classList.remove('invader')
            invader[i]--
        }
        directionptr--
        if(invader[0] % 28 == 0)
        {
            lap++
            right = true
            if(lap % 3 == 0)
            {

                for(let i = 0; i < invader.length; i++)
                {
                    invader[i] += 28
                }
            }
        }
    }
    for(let i = 0; i < invader.length; i++)
    {
        squares[invader[i]].classList.add('invader')
    }
    if(squares[currentshippos].classList.contains('invader'))lose()
    if(invader.length == 0)win()

}

function moveship(e)
{
    squares[currentshippos].classList.remove('ship')
    squares[currentshippos].innerHTML = ""
    switch (e.key) {
        case 'ArrowLeft':
            if(currentshippos % 28 > 0)
            {
                currentshippos--
            }
            break;
        case 'ArrowRight':
            if(currentshippos % 28 < 27)
            {

                currentshippos++
            }
            break;
        case 'Enter':
            start()
            default:
                break;
            }
    squares[currentshippos].classList.add('ship')
    squares[currentshippos].innerHTML = "<img src='images/ship.png'>"
}

function shoot(e)
{
    let laserId
    let currentlaserpos = currentshippos
    function moveLaser()
    {
        squares[currentlaserpos].classList.remove('laser')
        currentlaserpos -= 28
        if(currentlaserpos < 28)clearInterval(laserId)
        else squares[currentlaserpos].classList.add('laser')
        if(squares[currentlaserpos].classList.contains('invader'))
        {
            var index = invader.indexOf(currentlaserpos);
            if (index !== -1) 
            {
                invader.splice(index, 1);
            }
            squares[currentlaserpos].classList.remove('invader')
            squares[currentlaserpos].classList.remove('laser')
            clearInterval(laserId)
        }

    }
    switch (e.key) {
        case 'ArrowUp':
            laserId = setInterval(moveLaser,speed)
            break;
    
        default:
            break;
    }
}

function lose() {
    clearInterval(timer)
    document.querySelector('.start-board').innerHTML = "You lose"
}

function win() {
    clearInterval(timer)
    document.querySelector('.start-board').innerHTML = "You win"
}
function start() {
    timer = setInterval(moveinvader,speed)
    let saitamaEl = document.querySelector('.saitama')
    let kingEl = document.querySelector('.king')
    saitamaEl.classList.remove('saitama')
    kingEl.classList.remove('king')
    saitamaEl.classList.add('opm')
    kingEl.classList.add('strongest')
    document.querySelector('.start-board').innerHTML = ""
}

document.addEventListener('keydown',moveship)
document.addEventListener('keydown',shoot)