const gsapSectionLine = () => {
    /**
     * GASP プラグイン指定
     */
    gsap.registerPlugin(ScrollTrigger);

    const paths = document.querySelectorAll("[data-parallax-line]");

    paths.forEach(path => {
        const pathLength = path.getTotalLength();

        // 書き出しを逆にする場合は`strokeDashoffset: -pathLength`に変更する
        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });

        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2, // アニメーションの時間（秒）
            ease: "power4.inOut", // アニメーションの緩急
            scrollTrigger: {
                trigger: path,
                start: "top 80%", // ビューの80%に来た時に開始
                end: "bottom 20%", // ビューの20%までに完了（無視されるが定義）
                toggleActions: "play none none none" // アニメーションの制御
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', gsapSectionLine);