const container = document.getElementById("container");
const containerColor = document.querySelector(".change-color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const colors = ["#013405", "#6f3434"];

const btnColors = document.querySelectorAll(".btn");

// const btnBlue = document.querySelector(".blue");
// const btnRed = document.querySelector(".red");
// const btnYellow = document.querySelector(".yellow");
// const btnGreen = document.querySelector(".green");

const SQUARES = 500;

function setMouse() {
  for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));
    container.appendChild(square);
  }
}

setMouse();

// function setYourColor(element) {
//   btnColors.forEach((color) => {
//     color.addEventListener("click", function (e) {
//       const click = e.target.textContent;
//       element.style.background = `${click}`;
//     });
//   });
// }
// function setMouse() {
//   const square = document.createElement("div");

//   const squareArray = Array(SQUARES).fill(square);

//   squareArray.map((square, i) => {
//     square.classList.add("square");
//     console.log(square);
//     square.addEventListener("mouseover", () => setColor(square));
//     square.addEventListener("mouseout", () => removeColor(square));
//     container.appendChild(square);
//   });
// }

function setColor(element) {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  element.style.background = hexColor;
  element.style.boxShadow = `0 0 2px ${hexColor}, 0 0 10px ${hexColor}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// function getRandomColor() {
//   return colors[Math.floor(Math.random() * colors.length)];
// }
