const slides = document.querySelectorAll('#slider li');

let currentIndex = -1

for( i = 0; i < slides.length; i++) {

    i = i++;
    
}

function swipeSlider() {
    for( i = 0; i < slides.length; i++) {
        i = i++;
        let currentZIndex = slides.length - i;
        let newZIndex = currentZIndex + currentIndex
        slides[i].style.zIndex = newZIndex;

        if (currentIndex === i) {
            slides[i].classList.add('switch')
        }else {
            slides[i].classList.remove('switch')
        }
    }   
}



setInterval( ()=> {
    currentIndex = (currentIndex + 1) % slides.length;
    swipeSlider();
}, 1000)
