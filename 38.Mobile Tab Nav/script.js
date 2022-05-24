const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

const nav = document.querySelector("nav");

// listItems.forEach((item, idx) => {
//   item.addEventListener("click", function () {
//     hideAllContents();
//     hideAllItems();

//     item.classList.add("active");
//     contents[idx].classList.add("show");
//   });
// });

// function hideAllContents() {
//   contents.forEach((content) => content.classList.remove("show"));
// }

// function hideAllItems() {
//   listItems.forEach((item) => item.classList.remove("active"));
// }

nav.addEventListener("click", function (e) {
  const clicked = e.target.closest("li");
  console.log(clicked);
  // Guard clause
  if (!clicked) return;
  // Remove active class
  contents.forEach((c) => c.classList.remove("show"));
  listItems.forEach((l) => l.classList.remove("active"));
  // Activate tab
  clicked.classList.add("active");

  // Activate content area
  document
    .querySelector(`.content--${clicked.dataset.tab}`)
    .classList.add("show");
  console.log(clicked.dataset.tab);
});
