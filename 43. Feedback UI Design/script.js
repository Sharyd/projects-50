const ratings = document.querySelectorAll(".rating");
const panel = document.querySelector("#panel");
const sendBtn = document.querySelector("#send");
const container = document.querySelector(".ratings-container");

let selectedRating = "Satisfied";

container.addEventListener("click", function (e) {
  //   if (e.target.parentNode.classList.contains("rating")) {
  //     removeActive();
  //     e.target.parentNode.classList.add("active");
  //     selectedRating = e.target.nextElementSibling.textContent;
  //     console.log(selectedRating);
  //   }
  // my solution is better just bubbling on parent element of IMG
  removeActive();
  const clicked = e.target.closest(".rating");
  if (!clicked) return;
  clicked.classList.add("active");
  selectedRating = clicked.textContent;
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `<i class="fas fa-heart"> </i>
                       <strong> Thank you! </strong>
                      <br>
                      <strong> Feedback: ${selectedRating} </strong>
                      <p>We will use your feedback to improve our customer support </p>`;

  setTimeout(() => {
    location.reload();
  }, 5000);
});

function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}

// function addActive() {
//   ratings.forEach((rating) => {
//     rating.classList.add("active");
//   });
// }
