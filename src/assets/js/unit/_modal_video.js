{
    const modalVideoInit = () => {
        $('[data-popup-video]').magnificPopup({
            type: 'iframe',
            mainClass: 'modal-video',
            removalDelay: 200,
            preloader: false
        });
    }

    modalVideoInit();
}