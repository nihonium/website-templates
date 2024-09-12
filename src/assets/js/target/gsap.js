/*
 * 【GSAP練習用】
 */

{
    // * ローディングアニメーション時 class付与
    const bodyIsActive = () => {
        $('body').addClass('is-active');

        // ローディングアニメーションが非表示になったらclass削除
        const target = document.querySelector('[data-js-loader]');
        const observer = new MutationObserver(mutations => {
            mutations.forEach(({target}) => {
                if (target.style.opacity === '0' && target.style.visibility === 'hidden') {
                $('body').removeClass('is-active');
                observer.disconnect();
                }
            });
        });

        // (変更を監視する) オブザーバーのオプション
        observer.observe(target, {
            attributes: true,
            attributeFilter: ['style'],
            attributeOldValue: true,
        });
    }

    // * GSAPアニメーション
    const GSAPAnimation = () => {

        // 動かす要素
        const jsLoaderBg = '[data-js-loader]';
        const jsMotionItem1 = '[data-js-motion-item-1]';
        const jsMotionItem2 = '[data-js-motion-item-2]';
        const jsMotionItem3 = '[data-js-motion-item-3]';
        const jsMotionItem4 = '[data-js-motion-item-4]';
        const jsMotionItem5 = '[data-js-motion-item-5]';

        gsap.set(jsMotionItem1, {
            opacity: 0,
            y: -100
        });

        gsap.set([jsMotionItem2, jsMotionItem3, jsMotionItem4, jsMotionItem5], {
            opacity: 0,
            x: -100
        });

        // timelineを作成
        const tl = gsap.timeline();

        tl.to(
            jsLoaderBg, {
                autoAlpha: 0,
                duration: .5,
                ease: 'power4.inOut'
            },
            '+=1'
        ).to(
            jsMotionItem1, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power4.inOut'
            },
            '+=1'
        );

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(jsMotionItem2, {
            scrollTrigger: {
                trigger: jsMotionItem2,
                start: "top 60%",
                end: "bottom 80px",
                // markers: true
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.inOut'
        });
        gsap.to(jsMotionItem3, {
            scrollTrigger: {
                trigger: jsMotionItem3,
                start: "top 60%",
                end: "bottom 80px",
                // markers: true
            },
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power4.inOut'
        });
        gsap.to(jsMotionItem4, {
            scrollTrigger: {
                trigger: jsMotionItem4,
                start: "top 60%",
                end: "bottom 80px",
                // markers: true
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut'
        });
        gsap.to(jsMotionItem5, {
            scrollTrigger: {
                trigger: jsMotionItem5,
                start: "top 60%",
                end: "bottom 80px",
                // markers: true
            },
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power1.inOut'
        });
    }

    bodyIsActive();
    window.addEventListener('load', GSAPAnimation);
}