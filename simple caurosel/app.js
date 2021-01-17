let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item')
const totalSlides = slides.length;
console.log(totalSlides);

document.getElementById('carousel_button_next').addEventListener('click',function() {
    moveToNextSlide()
})

document.getElementById('carousel_button_prev').addEventListener('click',function() {
    moveToPrevSlide()
})
function updateSlidePosition() {
    for(let slide of slides) {
        slide.classList.remove('carousel_item_visible')
        slide.classList.add('carousel_item_hidden')
    }
    slides[slidePosition].classList.add('carousel_item_visible')
}
function moveToNextSlide() {
    console.log("next")
    if(slidePosition === totalSlides-1) {
        slidePosition = 0
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    console.log("prev")
    if(slidePosition == 0) {
        slidePosition = totalSlides-1;
    } else {
        slidePosition--;
    }
    updateSlidePosition()
}