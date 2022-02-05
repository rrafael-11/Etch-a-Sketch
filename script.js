
function generateSquares() {
    for (var i = 0; i < 16 * 16; i++) {
        let square = document.createElement('div')
        let container = document.querySelector('.container')
        square.classList.add('square')
        container.appendChild(square)
    }
}

generateSquares()