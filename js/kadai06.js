const item = document.querySelectorAll("img");

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("mouseover", function() {
        item[i].classList.add("over");
    })
    item[i].addEventListener("mouseout", () => {
        item[i].classList.remove("over");
    });
}
// item.forEach((img) => {
//     img.addEventListener("mouseover", () => {
//         img.classList.add("over");
//     });
//     img.addEventListener("mouseout", () => {
//         img.classList.remove("over");
//     });
// });
//    function(abc){}---- (abc) => {}