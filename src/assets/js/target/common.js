/** グローバルメニュー */
{
    const globalMenu = () => {
        /**
         * 画面幅を格納
         */
        let windowWidth = '';

        /**
         * ブレイクポイントを指定
         */
        const breakPoint = 1200;

        $(window).on('load resize', function () {
            windowWidth = window.innerWidth;

            if (windowWidth >= breakPoint) {
                $('[data-header-nav]').removeClass('is-show');
                $('[data-header-nav]').removeClass('is-animate');
                $('body').removeClass('is-active');
            } else {
                $('[data-header-nav]').addClass('is-animate');
            }
        });

        $('[data-menu-btn]').on('click', function () {
            $('[data-header-nav]').addClass('is-show');
            $('body').addClass('is-active');
        });

        $('[data-header-close]').on('click', function () {
            $('[data-header-nav]').removeClass('is-show');
            $('body').removeClass('is-active');
        });
    }

    const globalDropDown = () => {
        const main = document.querySelectorAll('[data-dropdown]');
        const item = Array.prototype.slice.call(main, 0);

        /**
         * 画面幅を格納
         */
        let windowWidth = '';

        /**
         * ブレイクポイントを指定
         */
        const breakPoint = 1200;

        $(window).on('load resize', function () {
            windowWidth = window.innerWidth;

            item.forEach(function (ele) {
                ele.querySelector('[data-dropdown-list]').removeAttribute('style');
                ele.querySelector('[data-dropdown-btn]').classList.remove('is-open');
                ele.querySelector('[data-dropdown-list]').classList.remove('is-open');
            });

            if (windowWidth >= breakPoint) {
                item.forEach(function (ele) {
                    ele.addEventListener('mouseover', function () {
                        ele.querySelector('[data-dropdown-list]').classList.add('is-open');
                    }, false);
                    ele.addEventListener('mouseout', function () {
                        ele.querySelector('[data-dropdown-list]').classList.remove('is-open');
                    }, false);
                });
            } else {
                $('[data-dropdown-btn]').on('click', function () {
                    $(this).toggleClass('is-open').next().slideToggle();
                });
            }
        });
    }

    globalMenu();
    globalDropDown();

    const mediaQueryList = window.matchMedia('(min-width: 768px)');

    /**
     * イベントリスナー
     */
    const listener = (event) => {
    // リサイズ時に行う処理
    if (event.matches) {
        // 768px以上
        console.log('PC用ブレークポイント用処理');
    } else {
        // 768px未満
        console.log('SP用ブレークポイント用処理');
    }
    };

    // リスナー登録
    // mediaQueryList.addListener(listener); // @deprecated
    mediaQueryList.addEventListener("change", listener);

    // 初期化処理
    listener(mediaQueryList);
}