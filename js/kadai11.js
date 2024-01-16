const lazyImg = document.querySelectorAll(".lazy")
const windowHeight = window.innerHeight

document.addEventListener("scroll", function () {
	for (let i = 0; i < lazyImg.length; i++) {
		const lazyImgRect = lazyImg[i].getBoundingClientRect().top
		if (lazyImgRect - windowHeight <= 0) {
			lazyImg[i].classList.add("loaded")
		}
	}
})
