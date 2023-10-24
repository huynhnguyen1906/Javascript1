for (i=10; i>0; i--){
    console.log(i)
}

const blankLink = document.querySelectorAll("a");

for (let i = 0; i < blankLink.length; i++) {
    blankLink[i].addEventListener("click", function(event) {
        event.preventDefault();
        const href = blankLink[i].href;
        window.open(href, "kadai05");
    }) 
}