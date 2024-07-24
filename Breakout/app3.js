const containerEl = document.querySelector('.container')
const SheildStart = [45,2]
const BallStart = [48,7]
let SheildCurrent = SheildStart
let BallCurrent = BallStart
let right = true
let up = true
let timer
class block {
    constructor(xaxis,yaxis,bxaxis,byaxis)
    {
        this.horizontal = xaxis
        this.vertical = yaxis
        this.backgroundX =  bxaxis
        this.backgroundY = byaxis
    }
}

const blocks = [
    new block(1,94,893,-5),
    new block(12,94,792,-3),
    new block(23,94,695,-3),
    new block(34,94,596,-3),
    new block(45,94,496,-3),
    new block(56,94,396,-3),
    new block(67,94,296,-3),
    new block(78,94,197,-3),
    new block(89,94,97,-3),
    new block(1,82,895,-40),
    new block(12,82,782,-40),
    new block(23,82,694,-62),
    new block(34,82,595,-60),
    new block(45,82,490,-60),
    new block(56,82,390,-60),
    new block(67,82,290,-60),
    new block(78,82,190,-60),
    new block(89,82,98,-60),
    new block(1,70,892,-118),
    new block(12,70,795,-118),
    new block(23,70,695,-118),
    new block(34,70,595,-118),
    new block(45,70,495,-118),
    new block(56,70,395,-118),
    new block(67,70,295,-118),
    new block(78,70,198,-118),
    new block(89,70,98,-118),
    new block(1,58,895,-175),
    new block(12,58,795,-175),
    new block(23,58,695,-175),
    new block(34,58,595,-175),
    new block(45,58,495,-175),
    new block(56,58,395,-175),
    new block(67,58,295,-175),
    new block(78,58,198,-175),
    new block(89,58,98,-175)
]

function createBlocks() {
    for(let i = 0; i < blocks.length; i++)
    {
        const blockEl = document.createElement('div')
        blockEl.classList.add('block')
        blockEl.style.left = blocks[i].horizontal  + '%'
        blockEl.style.bottom = blocks[i].vertical + '%'
        blockEl.style.backgroundPositionX = blocks[i].backgroundX + "px"
        blockEl.style.backgroundPositionY = blocks[i].backgroundY + "px"
        containerEl.appendChild(blockEl)
    }
}

const ShieldEl = document.createElement('div')

const BallEl = document.createElement('div')

function createSheild() {
    ShieldEl.classList.add('shield')
    ShieldEl.style.left = SheildCurrent[0] + '%'
    ShieldEl.style.bottom = SheildCurrent[1] + '%'
    containerEl.appendChild(ShieldEl)
}

function createBall() {
    BallEl.classList.add('ball')
    BallEl.style.left = BallCurrent[0] + '%'
    BallEl.style.bottom = BallCurrent[1] + '%' 
    containerEl.appendChild(BallEl)
}

function moveSheild(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if(SheildCurrent[0] > 0)
            {
                SheildCurrent[0] -= 5
                ShieldEl.style.left =  SheildCurrent[0] + '%'
            }
            break;
        case 'ArrowRight':
            if(SheildCurrent[0] < 90) 
            {
                SheildCurrent[0] += 5
                ShieldEl.style.left = SheildCurrent[0] + '%'
            }
            break;
    }  
}

function moveball() {
    collision()
    bounce()
    if(BallCurrent[0] < 96.5 && right == true)
    {
        BallCurrent[0] += 0.5
        BallEl.style.left = BallCurrent[0] + '%'
        if(BallCurrent[0] >= 96.5)right = false
    }
    if(BallCurrent[0] > 0 && right == false)
    {
        BallCurrent[0] -= 0.5
        BallEl.style.left = BallCurrent[0] + '%'
        if(BallCurrent[0] <= 0)right = true
    }
    if(BallCurrent[1] < 93.5 && up == true)
    {
        BallCurrent[1] += 1.3
        BallEl.style.bottom = BallCurrent[1] + '%'
        if(BallCurrent[1] >= 93.5)up = false
    }
    if(BallCurrent[1] >=0 && up == false)
    {
        BallCurrent[1] -= 1.3
        BallEl.style.bottom = BallCurrent[1] + '%'
        if(BallCurrent[1] <= 0)
        {
            clearInterval(timer)
            document.removeEventListener('keydown',moveSheild)
            lose()
        }
    }
}
 
function collision() {
    for(let i = 0; i < blocks.length; i++)
    {
        if(BallCurrent[0] >= blocks[i].horizontal-2 && BallCurrent[0] <= blocks[i].horizontal + 9 && BallCurrent[1] >= blocks[i].vertical -7 && BallCurrent[1] <= blocks[i].vertical + 5)
        {

            if(up == true)up = false
            else up = true
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i,1)
            console.log(blocks)
        }
    }
    if(blocks.length == 0)
    {
        clearInterval(timer)
        won()
    }
}

function bounce() {

    if(BallCurrent[0] >= SheildCurrent[0]-3 && BallCurrent[0] <= SheildCurrent[0] + 10 && BallCurrent[1] <= 7)
    {
        if(up == false)up = true
        if(BallCurrent[0] >= SheildCurrent[0] + 3)right = true
        else right = false
    }
}

function start(e) {
switch (e.key) {
    case 'Enter':
        document.addEventListener('keydown',moveSheild)
        document.querySelector('.container').style.backgroundImage = "url('')"
        createBlocks()
        document.querySelector('.info').innerHTML = ""
        timer = setInterval(moveball,15)
        break;     
    default:
        break;
    }
}
function won() {
    window.location.href = "index.html";
}
function lose() {
    window.location.href = "index2.html";
}
 
function restart() {
    location.reload()
}

createBall()
createSheild()
document.addEventListener('keydown',start)
