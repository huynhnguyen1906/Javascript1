
const blankLink = document.querySelectorAll("a");

for (let i = 0; i < blankLink.length; i++) {
    blankLink[i].addEventListener("click", function(event) {
        event.preventDefault();
        const link = blankLink[i].href;
        window.open(link, "kadai05");
    }) 
}