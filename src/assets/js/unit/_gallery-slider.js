/*
 * ギャラリーページ
 * * * * * * * */

// 画面幅を格納
let windowWidth = '';

// ブレイクポイントを指定
const breakPoint = 960;

const accordionGallery = () => {
    $('[data-gallery-accordion]').off('click').on('click', function(event) {
        $(this).next().slideToggle();
    });
};

const sliderSetting = () => {
    // * メインスライダー
    $('[data-gallery-slider]').slick({
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        dots: true,
        dotsClass: 'p-gallery-slider-dots-list',
        appendDots: $('[data-gallery-slider-dots]'),
        prevArrow: '<button id="sliderArrowPrev" class="p-gallery-slider-arrow p-gallery-slider-arrow--prev" type="button"></button>',
        nextArrow: '<button id="sliderArrowNext" class="p-gallery-slider-arrow p-gallery-slider-arrow--next" type="button"></button>',
        customPaging: function (slick, index) {
            $('[data-loading]').addClass('is-hide');
            // https://vanilla-bear.net/web-development/frontend/119/
            // スライダーのインデックス番号に対応した画像のsrcを取得
            let targetImage = slick.$slides.eq(index).find('img').attr('src');
            return '<img src=" ' + targetImage + ' "/>';
        }
    });
}

 const sliderArrowsSetting = () => {
     // * SP時矢印ボタンの位置を指定
     const sliderHeight = document.querySelectorAll('[data-gallery-slider] .p-gallery-slider__item > img');
     const sliderHeightSet = sliderHeight[0].offsetHeight + 'px';

    if (window.matchMedia('(max-width: 959px)').matches) {
        $('#sliderArrowPrev').css({'top': sliderHeightSet});
        $('#sliderArrowNext').css({'top': sliderHeightSet});
    } else {
        $('#sliderArrowPrev').removeAttr('style');
        $('#sliderArrowNext').removeAttr('style');
    }
}

const sliderThumbnailSetting = () => {
    // 画像枚数ごとの処理
    windowWidth = window.innerWidth;
    const slideCount = $('[data-gallery-slider]').find('.p-gallery-slider__item').length;
    const widthSet = ((slideCount * 106) + 6) + 'px';
    const widthSetTablet = windowWidth + 'px';

    if (window.matchMedia('(min-width: 960px)').matches) {
        if (slideCount >= 12) {
            $('[data-gallery-slider-dots]').css({ 'width': widthSet });
        } else if ((slideCount <= 11) && (windowWidth < 1200)) {
            $('[data-gallery-slider-dots]').css({ 'width': widthSetTablet });
            $('#dotsNext').hide();
            $('#dotsPrev').hide();
        } else if (slideCount <= 10) {
            $('[data-gallery-slider-dots]').css({ 'width': '1200px'});
            $('#dotsNext').hide();
            $('#dotsPrev').hide();
        }
    } else {
        $('[data-gallery-slider-dots]').removeAttr('style');
    }

    // スロットリング
    function throttle(func, delay) {
    let timerId;
    return function(...args) {
        if (!timerId) {
        timerId = setTimeout(() => {
            func(...args);
            timerId = null;
        }, delay);
        }
    };
    }

    // 設定
    const sliderWidth = document.querySelector('[data-gallery-slider]').offsetWidth;
    const dotsAreaWidth = document.querySelector('[data-gallery-slider-dots]').offsetWidth;
    const transformX = sliderWidth - dotsAreaWidth;
    const addCss = 'translateX(' + transformX + 'px)';
    const targetNode = document.getElementById('gallerySliderDots');
    const lists = Array.from(document.querySelectorAll('.p-gallery-slider-dots-list li'));
    windowWidth = window.innerWidth;

    // スロットリングされた処理
    const throttledFunction = throttle(() => {
        // DOMの変更があった場合の処理をここに記述

        // タブレット
        if ((windowWidth > breakPoint) && (windowWidth < 1200)) {
            const index = lists.findIndex(list =>
                Array.from(list.classList).includes("slick-active")
            );

            if (index > 6) {
                $('[data-gallery-slider-dots]').css({'transform': addCss});
                $('[data-gallery-slider-dots-prev]').addClass('is-active');
                $('[data-gallery-slider-dots-next]').removeClass('is-active');
            } else if (index === 0) {
                $('[data-gallery-slider-dots]').css({'transform': 'translateX(0)'});
                $('[data-gallery-slider-dots-prev]').removeClass('is-active');
                $('[data-gallery-slider-dots-next]').addClass('is-active');
            }
        // PC
        } else if ((windowWidth > breakPoint)) {
            const index = lists.findIndex(list =>
                Array.from(list.classList).includes("slick-active")
            );

            if (index > 9) {
                $('[data-gallery-slider-dots]').css({'transform': addCss});
                $('[data-gallery-slider-dots-prev]').addClass('is-active');
                $('[data-gallery-slider-dots-next]').removeClass('is-active');
            } else if (index === 0) {
                $('[data-gallery-slider-dots]').css({'transform': 'translateX(0)'});
                $('[data-gallery-slider-dots-prev]').removeClass('is-active');
                $('[data-gallery-slider-dots-next]').addClass('is-active');
            }
        // SP時 CSS削除
        } else if (windowWidth < breakPoint) {
            $('[data-gallery-slider-dots]').css({'transform': 'translateX(0)'});
        }
    }, 1000); // 1秒間隔で処理を実行

    // MutationObserverの初期化
    const observer = new MutationObserver(mutationsList => {
        throttledFunction();
    });

    // MutationObserverを設定し、DOMの監視を開始
    observer.observe(targetNode, { attributes: true, subtree: true, attributeFilter: ['class'] });

    // Clickイベントが発生した時の処理
    function handleClickEventPrev() {
        observer.disconnect();
        $('[data-gallery-slider-dots]').css({'transform': 'translateX(0)'});
        $('[data-gallery-slider-dots-prev]').removeClass('is-active');
        $('[data-gallery-slider-dots-next]').addClass('is-active');
        setTimeout(() => {
            observer.observe(targetNode, { attributes: true, subtree: true, attributeFilter: ['class'] });
        }, 500);
    }

    function handleClickEventNext() {
        observer.disconnect();
        $('[data-gallery-slider-dots]').css({'transform': addCss});
        $('[data-gallery-slider-dots-prev]').addClass('is-active');
        $('[data-gallery-slider-dots-next]').removeClass('is-active');
        setTimeout(() => {
            observer.observe(targetNode, { attributes: true, subtree: true, attributeFilter: ['class'] });
        }, 500);
    }

    function handleClickEventDots() {
        const index = lists.findIndex(list =>
            Array.from(list.classList).includes("slick-active")
        );

        // タブレット
        if ((windowWidth > breakPoint) && (windowWidth < 1200)) {
            if (index < 7) {
                observer.disconnect();
                $('[data-gallery-slider-dots]').css({'transform': 'translateX(0)'});
                $('[data-gallery-slider-dots-prev]').removeClass('is-active');
                $('[data-gallery-slider-dots-next]').addClass('is-active');
                setTimeout(() => {
                    observer.observe(targetNode, { attributes: true, subtree: true, attributeFilter: ['class'] });
                }, 500);
            }
        // PC
        } else if ((windowWidth > breakPoint)) {
            if (index < 10) {
                observer.disconnect();
                $('[data-gallery-slider-dots]').css({'transform': 'translateX(0)'});
                $('[data-gallery-slider-dots-prev]').removeClass('is-active');
                $('[data-gallery-slider-dots-next]').addClass('is-active');
                setTimeout(() => {
                    observer.observe(targetNode, { attributes: true, subtree: true, attributeFilter: ['class'] });
                }, 500);
            }

            if (index === 11) {
                observer.disconnect();
                $('[data-gallery-slider-dots]').css({'transform': addCss});
                $('[data-gallery-slider-dots-prev]').addClass('is-active');
                $('[data-gallery-slider-dots-next]').removeClass('is-active');
                setTimeout(() => {
                    observer.observe(targetNode, { attributes: true, subtree: true, attributeFilter: ['class'] });
                }, 500);
            }
        }
    }

    function handleClickEventArrowPrev() {
        const index = lists.findIndex(list =>
            Array.from(list.classList).includes("slick-active")
        );

        // タブレット
        if ((windowWidth > breakPoint) && (windowWidth < 1200)) {
            if (index < 7) {
                observer.disconnect();
                $('[data-gallery-slider-dots]').css({'transform': 'translateX(0)'});
                $('[data-gallery-slider-dots-prev]').removeClass('is-active');
                $('[data-gallery-slider-dots-next]').addClass('is-active');
                setTimeout(() => {
                    observer.observe(targetNode, { attributes: true, subtree: true, attributeFilter: ['class'] });
                }, 500);
            }
        // PC
        } else if ((windowWidth > breakPoint)) {
            if (index < 10) {
                observer.disconnect();
                $('[data-gallery-slider-dots]').css({'transform': 'translateX(0)'});
                $('[data-gallery-slider-dots-prev]').removeClass('is-active');
                $('[data-gallery-slider-dots-next]').addClass('is-active');
                setTimeout(() => {
                    observer.observe(targetNode, { attributes: true, subtree: true, attributeFilter: ['class'] });
                }, 500);
            }
        }
    }

    // Clickイベントのリスナーを設定
    const dotsPrev = document.getElementById('dotsPrev');
    dotsPrev.addEventListener('click', handleClickEventPrev);

    const dotsNext = document.getElementById('dotsNext');
    dotsNext.addEventListener('click', handleClickEventNext);

    const gallerySliderDots = document.getElementById('gallerySliderDots');
    gallerySliderDots.addEventListener('click', handleClickEventDots);

    const sliderArrowPrev = document.getElementById('sliderArrowPrev');
    sliderArrowPrev.addEventListener('click', handleClickEventArrowPrev);
}

window.addEventListener('load', accordionGallery);
window.addEventListener('resize', accordionGallery);
window.addEventListener('load', sliderSetting);
window.addEventListener('load', sliderArrowsSetting);
window.addEventListener('resize', sliderArrowsSetting);
window.addEventListener('load', sliderThumbnailSetting);
window.addEventListener('resize', sliderThumbnailSetting);