{
    const sliderMV = () => {
        $(document).ready(function(){
            $('[data-slider-mv]').slick({
                autoplay: true,
                dots: true,
                autoplaySpeed: 5000
            });
        });
    }

    sliderMV();
}