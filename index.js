const squares = document.querySelectorAll(".square");
const colors = ["#ff0000", "#0500ff", "#52ff00"];

squares.forEach((square) => {
  let i = 0;
  setInterval(function () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = randomColor;
    i++;
    if (i == colors.length) {
      i = 0;
    }
  }, 1500);
});
