let container = document.querySelector(".container");
let inputGrid = document.querySelector("#gridSize");
let currentGridTxt = document.querySelector("#currentGridTxt");
let squares = () => { return document.querySelectorAll(".square"); };
let gridSize = () => { return document.querySelector("#gridSize").value; };
let inputColor = () => { return document.querySelector("#inputColor").value; };
let randomColor = () => {
  let num1 = Math.floor(Math.random() * 253)
  let num2 = Math.floor(Math.random() * 253)
  let num3 = Math.floor(Math.random() * 253)

  return `rgb(${num1}, ${num2}, ${num3})`
}
let isRainbowModeOn = false
let currentColor = () => {return isRainbowModeOn ? randomColor() : inputColor()}

updateGrid(gridSize());

function updateGrid(gridSize) {
  resetGrid();
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  for (var i = 0; i < gridSize * gridSize; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

function resetGrid() {
  while (container.lastChild) {
    container.lastChild.remove();
  }
}

function clearGrid() {
  squares().forEach((square) => {
    square.style.backgroundColor = '#fff'
  })
}

function rainbowMode() {
  isRainbowModeOn = !isRainbowModeOn
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
  inputGrid.onmousemove = updateGridText;
  inputGrid.onmouseup = () => { 
    updateGrid(gridSize()); 
  };
});
