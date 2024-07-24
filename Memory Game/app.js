// these are the cards where elements will be picked from

const cards = [
    {
        name: 'image1',
        img: 'images/Image1.png'
    },
    {
        name: 'image1',
        img: 'images/Image1.png'
    },
    {
        name: 'image2',
        img: 'images/Image2.png'
    },
    {
        name: 'image2',
        img: 'images/Image2.png'
    },
    {
        name: 'image3',
        img: 'images/Image3.png'
    },
    {
        name: 'image3',
        img: 'images/Image3.png'
    },
    {
        name: 'image4',
        img: 'images/Image4.png'
    },
    {
        name: 'image4',
        img: 'images/Image4.png'
    },
    {
        name: 'image5',
        img: 'images/Image5.png'
    },
    {
        name: 'image5',
        img: 'images/Image5.png'
    },
    {
        name: 'image6',
        img: 'images/Image6.png'
    },
    {
        name: 'image6',
        img: 'images/Image6.png'
    },
    {
        name: 'image7',
        img: 'images/Image7.png'
    },
    {
        name: 'image7',
        img: 'images/Image7.png'
    },
    {
        name: 'image8',
        img: 'images/Image8.png'
    },
    {
        name: 'image8', 
        img: 'images/Image8.png'
    },
    {
        name: 'image9',
        img: 'images/Image9.png'
    },
    {
        name: 'image9',
        img: 'images/Image9.png'
    }
]

// chosencards will be the array to store the two cards currently selected

let chosencards = []

let removedcards = 0

// making our cards random

cards.sort(() =>  0.5 - Math.random())

// following method will add empty cards to the page

const gridelement = document.querySelector("#grid")

function createGrid() {
    for(let i = 0; i < cards.length; i++)
    {
        // creating an img element with attributes, then calling flip function when clicked
        const card = document.createElement('img')      
        card.setAttribute('src','images/Image0.png')
        card.setAttribute('id',i)
        card.setAttribute('class','card')
        card.addEventListener('click',flip)
        gridelement.appendChild(card)
    }
}
createGrid()

// this will store the cards that shouold be removed

let toremove  = document.querySelectorAll('#grid img')


function flip()
{
    let cardId = this.getAttribute('id')
    
    // Line below can be used to increase the time it takes to flip the card, and is hoped to be used for adding animations for flipping the card 
    // setTimeout(() => this.setAttribute('src',cards[cardId].img),500)
    
    this.setAttribute('src',cards[cardId].img)
    chosencards.push(cardId)
    // console.log(chosencards)
    if(chosencards.length === 2)
    {
        // console.log("do that function")
        let toremove  = document.querySelectorAll('#grid img')
        if(checkcards() === 0)setTimeout(() => revert(),1000)
        else setTimeout(() => clear(),500)
    }
    
}

function revert()
{
    toremove[chosencards[1]].setAttribute('src','images/Image0.png')
    toremove[chosencards[0]].setAttribute('src','images/Image0.png')
    chosencards = []   
}

function clear() 
{
    toremove[chosencards[1]].setAttribute('src','images/white.png')
    toremove[chosencards[0]].setAttribute('src','images/white.png')
    let temp1  = document.getElementById(chosencards[0])
    let temp2  = document.getElementById(chosencards[1])
    temp1.removeEventListener('click',flip)
    temp2.removeEventListener('click',flip)
    chosencards = []   
}

function checkcards()
{
    let temp1 = cards[chosencards[0]].name
    let temp2 = cards[chosencards[1]].name
    if(temp1 === temp2)
    {
        setTimeout(() => clear(),500)
        removedcards +=2
        document.getElementById('result').innerText = removedcards*15
        if(removedcards === cards.length)
        {
            // document.getElementById('result').innerHTML = removedcards*15 + " you won"
            document.querySelector('.header').innerHTML = "Score:" + removedcards*15 + "\nYou Won!"
        }
    }
    else setTimeout(() => revert(),500)
    return 0
}
