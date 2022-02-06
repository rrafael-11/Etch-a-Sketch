let container = document.querySelector(".container");

function generateSquares() {
  for (var i = 0; i < 16 * 16; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

generateSquares();

function changeSquareColor(e) {
  e.target.style.backgroundColor = "black";
}

container.addEventListener("mousemove", (e) => {
  changeSquareColor(e);
});
