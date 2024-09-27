gsap.registerPlugin(ScrollTrigger);

const path1 = document.querySelector("#path1");
const pathLength1 = path1.getTotalLength();

const path2 = document.querySelector("#path2");
const pathLength2 = path2.getTotalLength();

const path3 = document.querySelector("#path3");
const pathLength3= path3.getTotalLength();

const path4 = document.querySelector("#path4");
const pathLength4 = path4.getTotalLength();

// 初期状態: 線を全て隠す
gsap.set(path1, {
    strokeDasharray: pathLength1,
    strokeDashoffset: pathLength1
});

gsap.set(path2, {
    strokeDasharray: pathLength2,
    strokeDashoffset: pathLength2
});

gsap.set(path3, {
    strokeDasharray: pathLength3,
    strokeDashoffset: pathLength3
});

gsap.set(path4, {
    strokeDasharray: pathLength4,
    strokeDashoffset: pathLength4
});

// スクロールトリガーで線を描くアニメーション
gsap.to(path1, {
    strokeDashoffset: 0,
    duration: 1.5,// アニメーションの時間（秒）
    ease: "power1.inOut", // アニメーションの緩急
    scrollTrigger: {
        trigger: path1,
        start: "top 80%", // ビューの80%に来た時に開始
        end: "bottom 20%", // ビューの20%までに完了（無視されるが定義）
        toggleActions: "play none none none", // アニメーションの制御
    }
});

gsap.to(path2, {
    strokeDashoffset: 0,
    duration: 1.5,// アニメーションの時間（秒）
    ease: "power2.inOut", // アニメーションの緩急
    scrollTrigger: {
        trigger: path2,
        start: "top 80%", // ビューの80%に来た時に開始
        end: "bottom 20%", // ビューの20%までに完了（無視されるが定義）
        toggleActions: "play none none none", // アニメーションの制御
    }
});

gsap.to(path3, {
    strokeDashoffset: 0,
    duration: 1.5,// アニメーションの時間（秒）
    ease: "power3.inOut", // アニメーションの緩急
    scrollTrigger: {
        trigger: path3,
        start: "top 80%", // ビューの80%に来た時に開始
        end: "bottom 20%", // ビューの20%までに完了（無視されるが定義）
        toggleActions: "play none none none", // アニメーションの制御
    }
});

gsap.to(path4, {
    strokeDashoffset: 0,
    duration: 1.5,// アニメーションの時間（秒）
    ease: "power4.inOut", // アニメーションの緩急
    scrollTrigger: {
        trigger: path4,
        start: "top 80%", // ビューの80%に来た時に開始
        end: "bottom 20%", // ビューの20%までに完了（無視されるが定義）
        toggleActions: "play none none none", // アニメーションの制御
    }
});


// timelineを作成
const tl = gsap.timeline();

const pathmv1 = document.querySelector("#pathmv1");
const pathmvLength1 = pathmv1.getTotalLength();

const pathmv2 = document.querySelector("#pathmv2");
const pathmvLength2 = pathmv2.getTotalLength();

const pathmv3 = document.querySelector("#pathmv3");
const pathmvLength3 = pathmv3.getTotalLength();

// 初期状態: 線を全て隠す
gsap.set(pathmv1, {
    strokeDasharray: pathmvLength1,
    strokeDashoffset: pathmvLength1
});

gsap.set(pathmv2, {
    strokeDasharray: pathmvLength2,
    strokeDashoffset: pathmvLength2
});

gsap.set(pathmv3, {
    strokeDasharray: pathmvLength3,
    strokeDashoffset: pathmvLength3
});

tl.to(
    pathmv1, {
    strokeDashoffset: 0,
    duration: 2,
    ease: 'power4.inOut'
},
    '+=.3'
).to(
    pathmv2, {
    strokeDashoffset: 0,
    duration: 2,
    ease: 'power1.inOut'
},
    '+=.2'
).to(
    pathmv3, {
    strokeDashoffset: 0,
    duration: 1,
    ease: 'power4.inOut'
},
    '-=1'
);