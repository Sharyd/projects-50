const background = document.getElementById("background");

const password = document.getElementById("password");
const email = document.getElementById("email");

email.addEventListener("input", function (e) {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;

  if (blurValue >= 10) {
    console.log(blurValue);
    background.style.filter = `blur(${blurValue}px)`;
  }
});

password.addEventListener("input", function (e) {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 10 - length * 2;

  if (blurValue <= 10) {
    console.log(blurValue);
    background.style.filter = `blur(${blurValue}px)`;
  }
});
