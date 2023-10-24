const item = document.querySelectorAll("img");

item.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.classList.add("over");
    });
});
item.forEach((img) => {
    img.addEventListener("mouseout", () => {
        img.classList.remove("over");
    });
});