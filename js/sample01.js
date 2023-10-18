//カラーピッカーで取った色を背景の色に設定する
// ↓ プログラム寄りの言い方
//#set_colorで取った色をbodyの背景色にする

//タグを探す
document.querySelector("#set_color");

//コンソール画面にログを表示
console.log(document.querySelector("#set_color").value);

//bodyの背景色を変更する
//document.querySelector("body");
document.body.style.backgroundColor = "#FFF";

//#set_color 色設定を変更したら
document.querySelector("#set_color").oninput = function () {
  //bodyのbackgroundColorを#set_colorのvalueに設定する
  document.body.style.backgroundColor =
    document.querySelector("#set_color").value;

  //h1に#set_colorのカラーコードを表示する
  document.querySelector("h1").textContent =
    document.querySelector("#set_color").value;
};

//h1をコンソール画面にログを表示
console.log(document.querySelector("h1"));
