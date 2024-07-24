const containerEl = document.querySelector('.container')
let first = true
let count = 0
let crossed = []
let circled = []
let blocks = []
let squares = []
let timer
let left = 0
let right = 15
let pointer = 100
let num
const score = document.querySelector('.score')
for(let i = 0; i < 9; i++)
{
    const block = document.createElement('div')
    block.addEventListener('click',play)
    block.classList.add('block')
    block.setAttribute('id',i)
    blocks.push(block)
    switch (i) {
        case 0:
            block.classList.add('top')
            block.classList.add('left')
            break;
        case 1:
            block.classList.add('top')
            block.classList.add('middle')
            break;
        case 2:
            block.classList.add('top')
            block.classList.add('right')
            break;
        case 3:
            block.classList.add('middle')
            block.classList.add('left')
            break;
        case 4:
            block.classList.add('middle')
            break;
        case 5:
            block.classList.add('middle')
            block.classList.add('right')
            break;
        case 6:
            block.classList.add('bottom')
            block.classList.add('left')
            break;
        case 7:
            block.classList.add('bottom')
            block.classList.add('middle')
            break;
        case 8:
            block.classList.add('bottom')
            block.classList.add('right')
            break;
        default:
            break;
    }
    containerEl.appendChild(block)
}

const boxEl = document.querySelectorAll('.block')

for(let j = 0; j < 9; j++)
{

    for(let i = 0; i < 240; i++)
    {
        const minsquare = document.createElement('div')
        minsquare.classList.add('minisquare')
        minsquare.setAttribute('id',pointer++)
        // minsquare.innerHTML = 100 + i
        squares.push(minsquare)
        blocks[j].appendChild(minsquare)
    }
}

function play() {
    count++
    if(first == true)
    {
        // this.classList.add('cross')
        // console.log(this.id)
        num = this.id
        crossing()
        score.innerHTML = "Player 2"
        first = false
        crossed.push(this.id)
        this.removeEventListener('click',play)
    }
    else {
        this.classList.add('circle')
        score.innerHTML = "Player 1"
        first = true
        circled.push(this.id)
        this.removeEventListener('click',play)
    }
    check()
}

function check() {
    // first row
    if(crossed.includes('0') && crossed.includes('1') && crossed.includes('2'))
    {
        won()
    }
    else if(circled.includes('0') && circled.includes('1') && circled.includes('2'))
    {
        won()
    }

    // second row
    if(crossed.includes('3') && crossed.includes('4') && crossed.includes('5'))
    {
        won()
    }
    else if(circled.includes('3') && circled.includes('4') && circled.includes('5'))
    {
        won()
    }

    // third row
    if(crossed.includes('6') && crossed.includes('7') && crossed.includes('8'))
    {
        won()
    }
    if(circled.includes('6') && circled.includes('7') && circled.includes('8'))
    {
        won()
    }

    // first column
    if(crossed.includes('0') && crossed.includes('3') && crossed.includes('6'))
    {
        won()
    }
    if(circled.includes('0') && circled.includes('3') && circled.includes('6'))
    {
        won()
    }

    // second column
    if(crossed.includes('1') && crossed.includes('4') && crossed.includes('7'))
    {
        won()
    }
    if(circled.includes('1') && circled.includes('4') && circled.includes('7'))
    {
        won()
    }

    // third column
    if(crossed.includes('2') && crossed.includes('5') && crossed.includes('8'))
    {
        won()
    }
    if(circled.includes('2') && circled.includes('5') && circled.includes('8'))
    {
        won()
    }
    
    // first diagnol
    if(crossed.includes('0') && crossed.includes('4') && crossed.includes('8'))
    {
        won()
    }
    if(circled.includes('0') && circled.includes('4') && circled.includes('8'))
    {
        won()
    }
    
    // second diagnol
    if(crossed.includes('2') && crossed.includes('4') && crossed.includes('6'))
    {
        won()
    }
    if(circled.includes('2') && circled.includes('4') && circled.includes('6'))
    {
        won()
    }
}

function putcross()
{
    squares[(num)*240 + left].classList.add('yellow')
    // squares[(num)*240 + right].classList.add('yellow')
    left += 16
    right += 17
}

// console.log(squares[16])

function crossing() {
    timer = setInterval(putcross,100)
}

function won()
{
    if(first == true)
    {
        score.innerHTML = "Player 2 won!!"
    }
    else score.innerHTML = "Player 1 won!!"
    for(let i = 0; i < 9; i++)
    {
        const temp = document.getElementById(i)
        temp.removeEventListener('click',play)
    }
}