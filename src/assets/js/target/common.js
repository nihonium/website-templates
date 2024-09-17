/** グローバルメニュー */
{
    const globalMenu = () => {
        const eleNav = document.querySelector('[data-header-nav]');
        const eleBtnInner = document.querySelector('[data-menu-btn-inner]');
        const eleBody = document.querySelector('body');

        $(window).on('load resize', function () {
            windowWidth = window.innerWidth;

            if (windowWidth >= breakPoint) {
                eleNav.classList.remove('is-show', 'is-animate');
                eleBtnInner.classList.remove('is-open');
                eleBody.classList.remove('is-active');
            } else {
                eleNav.classList.add('is-animate');
            }
        });

        $('[data-menu-btn]').on('click', function () {
            if (eleBtnInner.classList.contains('is-open')) {
                eleBtnInner.classList.remove('is-open');
            } else {
                eleBtnInner.classList.add('is-open');
            }

            if (eleNav.classList.contains('is-show')) {
                eleNav.classList.remove('is-show');
            } else {
                eleNav.classList.add('is-show');
            }

            if (eleBody.classList.contains('is-active')) {
                eleBody.classList.remove('is-active');
            } else {
                eleBody.classList.add('is-active');
            }
        });

        $('[data-header-nav]').find('[data-scroll]').on('click', function () {
            windowWidth = window.innerWidth;

            if (windowWidth >= breakPoint) {
                eleNav.classList.remove('is-show', 'is-animate');
                eleBtnInner.classList.remove('is-open');
                eleBody.classList.remove('is-active');
            } else {
                eleNav.classList.add('is-animate');

                if (eleBtnInner.classList.contains('is-open')) {
                    eleBtnInner.classList.remove('is-open');
                } else {
                    eleBtnInner.classList.add('is-open');
                }

                if (eleNav.classList.contains('is-show')) {
                    eleNav.classList.remove('is-show');
                } else {
                    eleNav.classList.add('is-show');
                }

                if (eleBody.classList.contains('is-active')) {
                    eleBody.classList.remove('is-active');
                } else {
                    eleBody.classList.add('is-active');
                }
            }
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