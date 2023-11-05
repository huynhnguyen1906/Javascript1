const slider = document.querySelectorAll("#slider li");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let currentIndex = 0

// function showSlider () {
    // 基本のfor ループのやり方
    // for (let i = 0; i < slider.length; i++) {
    //     if ( i === currentIndex ) {
    //         slider[i].style.display = "block";
    //     } else {
    //         slider[i].style.display = "none";
    //     }
    // }


    // 基本のforEachのやり方
    // slider.forEach((slide, i) => {
    //     if ( i === currentIndex) {
    //         slide.style.display = "block"
    //     }else {
    //         slide.style.display = "none"
    //     }
    // })
// };

// nextBtn.addEventListener("click", () => {
//     if (currentIndex === slider.length -1) {
//         currentIndex = 0;
//     }else {
//         currentIndex++;
//     }
//     showSlider();
// });

// prevBtn.addEventListener("click", () => {
//     if (currentIndex === 0) {
//         currentIndex = slider.length -1;
//     } else {
//         currentIndex--;
//     }
//     showSlider();
// });





    // 基本のやり方の省略
function showSlider(index) {
    slider.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
//     JavaScriptでの三項演算子（ternary operator）は、条件をチェックし、その条件に基づいて値を返すことを可能に します。三項演算子の書き方のルールは以下の通りです：

// 例えば
// condition ? valueIfTrue : valueIfFalse

// ・condition はチェックしたい条件です。
// ・valueIfTrue は条件が true の場合に返す値です。
// ・valueIfFalse は条件が false の場合に返す値です。


// 以下は、三項演算子を使った例です：

// var age = 18;
// var status = age >= 18 ? "Adult" : "Minor";

// ・この例では、age が18以上の場合、変数 status は "Adult" に設定され、それ以外の場合は "Minor" に設定されます。
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1 ) % slider.length; 
    showSlider(currentIndex);
})

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slider.length) % slider.length;
    showSlider(currentIndex);
})