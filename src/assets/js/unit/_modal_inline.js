{
    const modalInit = () => {
        $('[data-popup]').magnificPopup({
            type: 'inline',
            preloader: false,
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
        });
    }

    modalInit();
}