// {
//     let count = 10;
//     while (count > 0) {
//         console.log("count:" + count);
//         count--;
//         count = count--;
//     }
// }
let text = document.getElementById("abc");
let count = 0;

text.style.fontSize = "30px";
setInterval(function () {
    if (count < 10) {
        text.innerHTML += "たくとのばか  ";
        count++;
    } else {
        text.innerHTML += "<br>";
        count = 0;
    }
}, 60);