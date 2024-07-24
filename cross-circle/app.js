const boxes = document.querySelectorAll('.box')
let blocks = []
let cross = true
let left = 32
let right  = 42
let x = 7
let y = 8
let timer
let num
let xed = []
let oed = []
for (let i = 0; i < 9; i++) {
    const box = boxes[i];
    for (let j = 0; j < 240; j++) {
        const block = document.createElement('div')
        block.classList.add('block')
        blocks.push(block)
        box.appendChild(block)
    }
}
boxes.forEach(element => {
    element.addEventListener('click',change)
});
function change() {

    if(cross == true)
    {
        num = this.id
        xed.push(num)
        timer = setInterval(crossing,10)
        this.removeEventListener('click',change)
        cross = false
    }   
    else 
    {
        num = this.id
        oed.push(num)
        circling()
        this.removeEventListener('click',change)
        cross = true
    }
    check()
}
function crossing()
{
    blocks[num*240 + left].classList.add('blue')
    blocks[num*240 + right].classList.add('green')
    left += 16
    right += 14
    if(left % 208 == 0)
    {
        right = 42
        left = 32
        clearInterval(timer)
    }
}
function circling()
{
    boxes[num].classList.add('circle')
}
function check() {
    if(xed.includes('0') && xed.includes('1') && xed.includes('2'))
    {
        won()
    }
    else if(oed.includes('0') && oed.includes('1') && oed.includes('2'))
    {
        won()
    }

    // second row
    if(xed.includes('3') && xed.includes('4') && xed.includes('5'))
    {
        won()
    }
    else if(oed.includes('3') && oed.includes('4') && oed.includes('5'))
    {
        won()
    }

    // third row
    if(xed.includes('6') && xed.includes('7') && xed.includes('8'))
    {
        won()
    }
    if(oed.includes('6') && oed.includes('7') && oed.includes('8'))
    {
        won()
    }

    // first column
    if(xed.includes('0') && xed.includes('3') && xed.includes('6'))
    {
        won()
    }
    if(oed.includes('0') && oed.includes('3') && oed.includes('6'))
    {
        won()
    }

    // second column
    if(xed.includes('1') && xed.includes('4') && xed.includes('7'))
    {
        won()
    }
    if(oed.includes('1') && oed.includes('4') && oed.includes('7'))
    {
        won()
    }

    // third column
    if(xed.includes('2') && xed.includes('5') && xed.includes('8'))
    {
        won()
    }
    if(oed.includes('2') && oed.includes('5') && oed.includes('8'))
    {
        won()
    }
    
    // first diagnol
    if(xed.includes('0') && xed.includes('4') && xed.includes('8'))
    {
        won()
    }
    if(oed.includes('0') && oed.includes('4') && oed.includes('8'))
    {
        won()
    }
    
    // second diagnol
    if(xed.includes('2') && xed.includes('4') && xed.includes('6'))
    {
        won()
    }
    if(oed.includes('2') && oed.includes('4') && oed.includes('6'))
    {
        won()
    }
}
function won() {
    boxes.forEach(element => {
        element.removeEventListener('click',change)
    });
    if(cross == false)
    {
        boxes.forEach(element => {
            element.classList.remove('circle')
        });
    }
   
}
