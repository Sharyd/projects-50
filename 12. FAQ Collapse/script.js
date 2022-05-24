const btns = document.querySelectorAll(".faq-toggle");
const container = document.querySelector(".faq-container");
const faq = document.querySelectorAll(".faq");

console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // removeActive();
    btn.parentElement.classList.toggle("active");
  });
});

// function removeActive() {
//   faq.forEach((faq) => {
//     faq.classList.remove("active");
//   });
// }
