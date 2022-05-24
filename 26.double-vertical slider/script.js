const containerSlider = document.querySelector(".container-slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");

const slidesLength = slideRight.querySelectorAll("div").length;
let numberActiveSlide = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

arrowUp.addEventListener("click", function () {
  changeSlider("up");
});

arrowDown.addEventListener("click", function () {
  changeSlider("down");
});

function changeSlider(clickOn) {
  if (clickOn === "up") {
    numberActiveSlide++;
    if (numberActiveSlide > slidesLength - 1) {
      numberActiveSlide = 0;
    }
  } else {
    numberActiveSlide--;
    if (numberActiveSlide < 0) {
      numberActiveSlide = slidesLength - 1;
    }
  }
  const sliderHeight = containerSlider.clientHeight;
  slideRight.style.transform = `translateY(-${
    numberActiveSlide * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    numberActiveSlide * sliderHeight
  }px)`;
}
