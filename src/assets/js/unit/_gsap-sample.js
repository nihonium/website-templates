/**
 * GSAPを使ったアニメーション実装
 * 
 * 参照：https://ics.media/entry/220822/
*/

window.addEventListener("DOMContentLoaded", () => {
    // デモ説明のためのデフォルト設定
    gsap.defaults({
        repeat: -1, // 無限に繰り返し
        repeatDelay: 0.5, // 繰り返し時に0.5秒の待機
    });

    // たくさんの矩形を配置
    for (let i = 0; i < 100; i++) {
        const rect = document.createElement("div");
        rect.classList.add("rect");
        document.getElementById("dispersionMotion").appendChild(rect);

        rect.style.left = `${i}vw`;
    }

    // 画面下部に落下
    gsap.to(".rect", {
        y: "50vh",
        duration: 2,
        ease: "bounce.out",
        stagger: {
        each: 0.01, // ばらす間隔（秒）
        from: "random", // ランダムに開始
        },
    });
});