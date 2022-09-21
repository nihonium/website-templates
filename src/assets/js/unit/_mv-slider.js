{
    const sliderMV = () => {
        $(window).on('load', function () {
            $('[data-slider-mv]').slick({
                autoplay: true,
                dots: true,
                autoplaySpeed: 5000
            });
        });
    }

    sliderMV();
}