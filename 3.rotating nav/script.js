const opening = document.getElementById ("open")
const closing = document.getElementById ("close")
const container = document.querySelector(".container")


// přes šipkovou notaci
// opening.addEventListener("click", () => container.classList.add("show-nav"))
// closing.addEventListener("click", () => container.classList.remove("show-nav"))


opening.addEventListener("click", function(){
    container.classList.add("show-nav")
})
closing.addEventListener("click", function(){
    container.classList.remove("show-nav")
})

