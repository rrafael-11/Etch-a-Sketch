let container = document.querySelector(".container");
let inputGrid = document.querySelector("#gridSize");
let currentGridTxt = document.querySelector("#currentGridTxt");
let rainbowModeButton = document.querySelector('#rainbowModeButton')
let isRainbowModeOn = false
let squares = () => { return document.querySelectorAll(".square"); };
let gridSize = () => { return document.querySelector("#gridSize").value; };
let randomNum = () => { return Math.floor(Math.random() * 253) }
let inputColor = () => { return document.querySelector("#inputColor").value; };
let randomColor = () => { return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})` }
let currentColor = () => { return isRainbowModeOn ? randomColor() : inputColor() }

updateGrid(gridSize());

function updateGrid(gridSize) {
  resetGrid();
  updateGridTemplate(gridSize)
  generateSquares(gridSize)

  function resetGrid() {
    while (container.lastChild) {
      container.lastChild.remove();
    }
  }

  function updateGridTemplate() {
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  }

  function generateSquares() {
    for (var i = 0; i < gridSize * gridSize; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
  }
}

function updateGridText(gridSize) {
  return (currentGridTxt.textContent = `${gridSize}x${gridSize}`);
}

function clearGrid() {
  squares().forEach((square) => {
    square.style.backgroundColor = '#fff'
  })
}

function rainbowMode() {
  isRainbowModeOn = !isRainbowModeOn
  rainbowModeButton.classList.toggle('selected')
}

function updateGridText() {
  return (currentGridTxt.textContent = `${gridSize()}x${gridSize()}`);
}

function changeSquareColor(e, color) {
  return e.target.style.backgroundColor = color;
}

container.addEventListener("mouseenter", () => {
  squares().forEach((square) => {
    square.addEventListener("mouseenter", (e) => {
      changeSquareColor(e, currentColor());
    });
  });
});

inputGrid.addEventListener("mousedown", () => {
  inputGrid.onmousemove = () => {
    updateGridText(gridSize());
  }
  inputGrid.onmouseup = () => {
    updateGrid(gridSize());
  };
});
