const boxEl = document.querySelector('.container')
let pressed = 0
let time = 0
let timer
const texts = [
    "Bran: Can a man still be brave if he's afraid? Eddard: That is the only time a man can be brave.",
    "The blood of the First Men still flows in the veins of the Starks, and we hold to the belief that the man who passes the sentence should swing the sword. If you would take a man's life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die.",
    "If it came to that, the life of some child I did not know, against Robb and Sansa and Arya and Bran and Rickon, what would I do? Even more so, what would Catelyn do, if it were Jon's life, against the children of her body? He did not know. He prayed he never would",
    "Cersei: You should have taken the realm for yourself. It was there for the taking. Jaime told me how you found him on the Iron Throne the day King's Landing fell, and made him yield it up. That was your moment. All you needed to do was climb those steps, and sit. Such a sad mistake.Eddard: I have made more mistakes than you can possibly imagine, but that was not one of them.",
    "We will have it all back someday, sweet sister. The jewels and the silks, Dragonstone and King's Landing, the Iron Throne and the Seven Kingdoms, all they have taken from us, we will have it back",
    "His own remote ancestor, King Loren of the Rock, had tried to stand against the fire when he joined with King Mern of the Reach to oppose the Targaryen conquest. That was close on three hundred years ago, when the Seven Kingdoms were kingdoms, and not mere provinces of a greater realm."
]
const text = texts[Math.floor(Math.random()*texts.length)]
let blocks = []
let currentPos = 0
let onmistake = false
let mistakeCount = 0

const n = text.length
for(let i = 0; i < text.length; i++)
{
    const block = document.createElement('div')
    block.classList.add('block')
    if(currentPos < n)
    {
        block.innerHTML = text[currentPos++]
        blocks.push(block)
    }
    boxEl.appendChild(block)
}
currentPos = 0

document.addEventListener('keydown',check)
function check(e) {
    if(pressed == 0)start()
    pressed = 1
    if(e.key == 'Shift'){
    }
    else if(e.key == 'Backspace'){
        if(onmistake == true)
        {
            blocks[currentPos].classList.remove('wrong')
            onmistake = false
        }
        else
        {
            if(currentPos > 0)currentPos--
            blocks[currentPos].classList.remove('done')
        }

    }
    else if(e.key == text[currentPos])
    {
    
        if(onmistake == false){
            blocks[currentPos].classList.add('done')
            currentPos++
            onmistake = false
        }
        if(document.querySelectorAll('.done').length == text.length)complete()
    }
    else {
        let audio = new Audio("media/buzzer.wav")
        audio.play()
        mistakeCount++
        blocks[currentPos].classList.add('wrong')
        onmistake = true
    }
}
function start() {
    timer = setInterval(increase,1000)
}
function increase() {
    time++
}
function complete() {
    clearInterval(timer)
    document.removeEventListener('keydown',check)
    const speeed = text.length/(4*(time/60))
    const accuracy = (text.length- mistakeCount)/text.length*100
    const resultEl = document.querySelector('.answer')
    resultEl.classList.add('result')
    resultEl.innerHTML = "Your accuracy was " + accuracy + " %" + "<br><br>" + "Your speed was " + speeed + "wpm"
}