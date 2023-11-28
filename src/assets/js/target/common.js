/** グローバルメニュー */
{
    const globalMenu = () => {

        /**
         * 画面幅を格納
         * @type {number}
         */
        let windowWidth = '';

        /**
         * ブレイクポイントを指定
         * @type {number}
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

    globalMenu();

    const main = document.querySelectorAll('[data-menu-dropdown]');
    const item = Array.prototype.slice.call(main,0);

    item.forEach(function (element) {
    element.addEventListener("mouseover",function(){
        element.querySelector('[data-menu-dropdown-list]').classList.add('open');
    },false);
    element.addEventListener("mouseout",function(){
        element.querySelector('[data-menu-dropdown-list]').classList.remove('open');
    },false);
    });
}