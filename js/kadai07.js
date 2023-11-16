const slider = document.querySelectorAll("#slider li");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let currentIndex = 0

function showSlider(index) {
    slider.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}
//JavaScriptでの三項演算子（ternary operator）は、条件をチェックし、その条件に基づいて値を返すことを可能に します。三項演算子の書き方のルールは以下の通りです：

// 例えば
// condition ? valueIfTrue : valueIfFalse

// ・condition はチェックしたい条件です。
// ・valueIfTrue は条件が true の場合に返す値です。
// ・valueIfFalse は条件が false の場合に返す値です。


// 以下は、三項演算子を使った例です：

// var age = 18;
// var status = age >= 18 ? "Adult" : "Minor";

// ・この例では、age が18以上の場合、変数 status は "Adult" に設定され、それ以外の場合は "Minor" に設定されます。
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1 ) % slider.length; 
    showSlider(currentIndex);
})

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slider.length) % slider.length;
    showSlider(currentIndex);
})