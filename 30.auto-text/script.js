const heading = document.getElementById("text");
const speedOrig = document.getElementById("speed");
const text = "Daniel vypisuje text";

let idLetter = 1;
let delay = 1000 / speedOrig.value;

function printText() {
  heading.textContent = text.slice(0, idLetter);

  idLetter++;

  if (idLetter > text.length) {
    idLetter = 1;
  }

  setTimeout(printText, delay);
}

printText();

speedOrig.addEventListener("input", function (event) {
  delay = 500 / event.target.value;
});
