{
    const globalMenu = () => {
        $('[data-menu-btn]').on('click', function () {
            $('[data-header-nav]').fadeIn(300);
            $('body').addClass('is-active');
        });

        $('[data-header-close]').on('click', function () {
            $('[data-header-nav]').fadeOut(300);
            $('body').removeClass('is-active');
        });
    }

    globalMenu();
}