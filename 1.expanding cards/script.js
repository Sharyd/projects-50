const slides = document.querySelectorAll(".slide")

// slides.forEach(function(slide){
//     slide.addEventListener("click", function(){
//         slides.forEach(function(slide){
//             slide.classList.remove("active")
//         })
        
//         slide.classList.add("active")
        
        
        
//     })
// })


/* přes For cyklus*/

for(let i = 0; i < slides.length; i++){
    slides[i].addEventListener("click", function(){
        deleteActiveClass()
        slides[i].classList.add("active") 
    })
}


function deleteActiveClass() {
    slides.forEach(function(slide){
        slide.classList.remove("active")
    })
}
