const slider = document.querySelectorAll("#slider li");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let currentIndex = 0

function showSlider(index) {
    slider.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1 ) % slider.length; 
    showSlider(currentIndex);
})

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slider.length) % slider.length;
    showSlider(currentIndex);
})