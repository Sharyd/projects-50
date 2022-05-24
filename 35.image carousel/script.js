const container = document.querySelector(".image-container");
const nextBtn = document.querySelector("#right");
const prevBtn = document.querySelector("#left");

const imgs = document.querySelectorAll("img");

let currentSlide = 0;
const maxSlide = imgs.length;

let interval = setInterval(run, 3000);

function run() {
  nextSlide();
}

const goToSlide = function (slide) {
  container.style.transform = `translateX(${-100 * slide}%)`;
};

const nextSlide = function () {
  if (currentSlide >= maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
  resetInterval();
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  resetInterval();
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  }

  if (e.key === "ArrowLeft") {
    prevSlide();
  }
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
  console.log(interval);
}
