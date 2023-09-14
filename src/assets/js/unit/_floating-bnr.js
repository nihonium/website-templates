{
    const floatingBnr = () => {
        let startPos = 0;
        let winScrollTop = 0;

        $(window).on('scroll', function () {
            const doch = $(document).innerHeight();
            const winh = $(window).innerHeight();
            const bottom = doch - winh;
            const header = document.getElementById('header').clientHeight;
            const footer = document.getElementById('footer').clientHeight;
            winScrollTop = $(this).scrollTop();

            if ((winScrollTop < (header * 3)) || (bottom - (footer * 2) < winScrollTop)) {
                $('[data-floating]').removeClass('is-show');
            } else {
                $('[data-floating]').addClass('is-show');
            }
            startPos = winScrollTop;
        });
    }

    floatingBnr();
}