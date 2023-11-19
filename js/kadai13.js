const slides = document.querySelectorAll('#slider li');

let currentIndex = -1

for( i = 0; i < slides.length; i++) {
    let zIndex = slides.length - i;
    slides[i].style.zIndex = zIndex;
    i = i++;
}

function swipeSlider() {
    for( i = 0; i < slides.length; i++ ) {
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
    setTimeout(()=> {
        const firstZIndex = parseInt(slides[slides.length-1].style.zIndex)
    for( i = slides.length - 1 ; i > 0 ; i-- ) {
        const prevZIndex = parseInt(slides[i - 1].style.zIndex);
        slides[i].style.zIndex = prevZIndex
    }
    slides[0].style.zIndex = firstZIndex
    }, 1000)
}, 1000)
