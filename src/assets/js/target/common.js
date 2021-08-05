{
    const globalMenu = () => {
        let windowWidth = '';
        const breakPoint = 1200;

        $(window).on('load resize', function () {
            windowWidth = window.innerWidth;

            if (windowWidth >= breakPoint) {
                $('[data-header-nav]').removeClass('is-show');
                $('[data-header-nav]').removeClass('is-animation');
                $('body').removeClass('is-active');
            } else {
                $('[data-header-nav]').addClass('is-animation');
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
}