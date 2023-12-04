/** グローバルメニュー */
{
    const globalMenu = () => {
        $(window).on('load resize', function () {
            windowWidth = window.innerWidth;

            if (windowWidth >= breakPoint) {
                $('[data-header-nav]').removeClass('is-show is-animate');
                $('[data-menu-btn]').removeClass('is-open');
                $('body').removeClass('is-active');
            } else {
                $('[data-header-nav]').addClass('is-animate');
            }
        });

        $('[data-menu-btn]').on('click', function () {
            $(this).toggleClass('is-open');
            $('[data-header-nav]').toggleClass('is-show');
            $('body').toggleClass('is-active');
        });
    }

    const globalDropDown = () => {
        const main = document.querySelectorAll('[data-dropdown]');
        const item = Array.prototype.slice.call(main, 0);

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
                $('[data-dropdown-btn]').off('click'); // ブラウザリサイズ時　複数実行不具合用の処理
                $('[data-dropdown-btn]').on('click', function () {
                    $(this).toggleClass('is-open').next().slideToggle();
                });
            }
        });
    }

    /**
     * 画面幅を格納
     */
    let windowWidth = '';

    /**
     * ブレイクポイントを指定
     */
    const breakPoint = 1200;

    globalMenu(windowWidth, breakPoint);
    globalDropDown(windowWidth, breakPoint);
}