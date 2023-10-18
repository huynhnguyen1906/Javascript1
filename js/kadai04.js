let linkElem = document.querySelectorAll("a");

linkElem.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let href = link.href;
        window.open(href, "kadai04")
    });
});