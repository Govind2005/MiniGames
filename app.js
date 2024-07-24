const mainEl = document.querySelector('main')
for(var i = 0; i < 50; i++)
{
    const balloon = document.createElement('div')
    balloon.classList.add('balloon')
    mainEl.appendChild(balloon)
}

const boxes = document.querySelectorAll('.box')
console.log(boxes)

function shuffle() {
        anime({
            targets: '.balloon',
            translateX: function(){
                return anime.random(-800,800)
            },
            targets: '.balloon',
            translateY: function(){
                return anime.random(-700,700)
            },
            targets: '.balloon',
            scale: function() {
                return anime.random(1,5)
            },
            easing: 'linear',
            duration: 400,
            delay: anime.stagger(50),
            complete: shuffle,
        })
}
shuffle()