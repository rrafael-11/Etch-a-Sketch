let container = document.querySelector(".container");
let squares = () => {return document.querySelectorAll('.square')}
let inputColor = () => {return document.querySelector('#inputColor').value}


function generateSquares() {
  for (var i = 0; i < 16 * 16; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

generateSquares();

function changeSquareColor(e) {
  e.target.style.backgroundColor = inputColor();
}

squares().forEach(square => (
  square.addEventListener('mousemove', (e) => {changeSquareColor(e)})
))