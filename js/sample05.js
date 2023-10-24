// {
//     let count = 10;
//     while (count > 0) {
//         console.log("count:" + count);
//         count--;
//         count = count--;
//     }
// }

const button = document.getElementById("button");
const sumText = document.getElementById("sum")
button.addEventListener("click", function() {
    sumText.textContent =""
    const inputNumber = document.getElementById("input").value;
    if (isNaN(inputNumber)){
        sumText.textContent = inputNumber + "は数値じゃない"
    }else if (inputNumber == "") {
        sumText.textContent = "数値入力してください"
    }else {
        for (let i=1; i<=9; i++) {
            let result = inputNumber * i;
            const Result = document.createElement("p");
            sumText.appendChild(Result)
            Result.textContent = inputNumber + "x" + i + "=" + result
        }
    }
});

