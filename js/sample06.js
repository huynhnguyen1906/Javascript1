const boxs = document.querySelectorAll(".box");

boxs.forEach((bgImg) => {
    bgImg.addEventListener("click", () => {
        bgImg.style.backgroundColor = "red";
    })
})