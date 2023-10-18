
let linkElem = document.querySelector("a");

linkElem.addEventListener("click", function(event) {
    event.preventDefault();
    let href = linkElem.href;
    window.open(href, "JS1")
});