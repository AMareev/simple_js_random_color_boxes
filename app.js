const board = document.querySelector('#board');
const colors = ['#c7a6e2', '#d986d2', '#e2b5a7', '#dfdfa2', '#e8e8c4']

const container = document.querySelector('.container')


const displaySize = container.clientHeight * container.clientWidth

const SQUARE_NUMBERS = Math.floor(displaySize /256);
console.log(SQUARE_NUMBERS)

for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(e) {
    e.style.backgroundColor= getRandomColor()
    e.style.boxShadow = `0 0 2px ${e.style.backgroundColor}, 0 0 10px ${e.style.backgroundColor}`
}

function removeColor(e) {
    e.style.backgroundColor= '#1d1d1d'
    e.style.boxShadow = null
}

function getRandomColor() {
    const index=  Math.floor(Math.random() * colors.length)
    return colors[index]
}