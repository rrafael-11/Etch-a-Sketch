let container = document.querySelector(".container");
let inputGrid = document.querySelector("#gridSize");
let currentGridTxt = document.querySelector("#currentGridTxt");
let squares = () => { return document.querySelectorAll(".square"); };
let gridSize = () => { return document.querySelector("#gridSize").value; };
let inputColor = () => { return document.querySelector("#inputColor").value; };

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

function updateGridText() {
  return (currentGridTxt.textContent = `${gridSize()}x${gridSize()}`);
}

function changeSquareColor(e) {
  return (e.target.style.backgroundColor = inputColor());
}

container.addEventListener("mouseenter", () => {
  squares().forEach((square) => {
    square.addEventListener("mousemove", (e) => {
      changeSquareColor(e);
    });
  });
});

inputGrid.addEventListener("mousedown", () => {
  inputGrid.onmousemove = updateGridText;
  inputGrid.onmouseup = () => { 
    updateGrid(gridSize()); 
  };
});
