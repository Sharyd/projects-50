const input = document.querySelector(".input-search")
const search = document.querySelector(".search")
const btn = document.querySelector(".btn")


btn.addEventListener("click", function(){
    search.classList.toggle("active")
    input.focus();
})