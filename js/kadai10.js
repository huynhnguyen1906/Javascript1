const naviBar = document.getElementById('category-navi');
//category-navi　ていう要素を宣言する。（css見てから何を宣言するか決める）


window.addEventListener('scroll', () => {
//ブラウザの画面全体が動くときにイベントをかける

    const scrollY = window.scrollY;
    //縦方向（Ｙ）に動いた距離をとる

    naviBar.style.top = scrollY + 'px'
    //category-naviのトップ(Y)の新し位置は縦方向（Ｙ）に動いた距離によって、決める

})