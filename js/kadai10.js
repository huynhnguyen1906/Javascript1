const naviBar = document.getElementById("category-navi")
const naviBarTop = naviBar.getBoundingClientRect().top
// scroll イベントのリスナーを追加
window.addEventListener("scroll", () => {
	// スクロールされた垂直位置を取得
	const scrollY = window.scrollY

	// もしスクロールされた位置がナビバーの上端よりも下ならば
	if (scrollY > naviBarTop) {
		// ナビバーの top プロパティをスクロール位置に合わせて更新
		naviBar.style.top = scrollY + "px"
		console.log("avs")
	} else {
		// スクロール位置がナビバーの上端よりも上ならば、ナビバーを画面上端に固定
		naviBar.style.top = "0px"
	}
	console.log(scrollY)
})
