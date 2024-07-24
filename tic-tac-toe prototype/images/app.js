const boxEl = document.querySelector('.container')
let blocks = []
let timer
let first = 1
let second = 31
for(let i = 0; i < 1024; i++)
{
    const blockEl = document.createElement('div')
    blockEl.classList.add('block')
    blockEl.setAttribute('id',i)
    blockEl.innerHTML = i
    blocks.push(blockEl)
    boxEl.appendChild(blockEl)
}

function change(){
    first += 33
    second += 31
    if(second >= 930 || first >= 930)
    {
        blocks[496].classList.remove('yellow')
        blocks[496].classList.remove('blue')
        blocks[496].classList.add('middle')
        clearInterval(timer)
    }
    blocks[first].classList.add('yellow')
    blocks[second].classList.add('blue')
}

timer = setInterval(change,20)

