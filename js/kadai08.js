const slider = document.querySelectorAll("#slider li");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let currentIndex = 0

function showSlider() {
    for( i = 0; i < slider.length; i++ ) {
        if (currentIndex === i) {
            slider[i].style.display = 'block'
            setTimeout(() => {
                for( i = 0; i < slider.length; i++ ) {
                    if (currentIndex === i) {
                    slider[i].style.opacity = '1'
                    }
                }
            }, 5)
        }else {
            slider[i].style.display = 'none'
            slider[i].style.opacity = '0'
        }
    }
}


nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1 ) % slider.length; 
    showSlider();
    clearInterval(autoSlider)
})

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slider.length) % slider.length;
    showSlider(currentIndex);
    clearInterval(autoSlider)
})

const autoSlider = setInterval(() => {
    currentIndex = (currentIndex + 1 ) % slider.length; 
    showSlider();
}, 1500)