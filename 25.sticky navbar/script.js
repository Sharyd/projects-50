const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const navUl = document.getElementById("navUl");
const hero = document.querySelector(".hero");
// const navHeight = nav.getBoundingClientRect().height;
// window.addEventListener("scroll", fixNav);

// function fixNav() {
//   if (window.scrollY > navHeight + 150) {
//     nav.classList.add("active");
//   } else {
//     nav.classList.remove("active");
//   }
// }

// // with intersection observer(with time set)
// console.log(nav.offsetHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroObserver.observe(hero);
