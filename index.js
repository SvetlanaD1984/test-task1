const squares = document.querySelectorAll(".square");
const colors = ["#ff0000", "#0500ff", "#52ff00"];

let i = 0;
setInterval(function () {
  squares.forEach((square) => {
    square.style.backgroundColor = colors[i];
    if (i === colors.length) {
      i = 0;
    }
    i++;
  });
}, 1500);

console.log(colors[i]);
