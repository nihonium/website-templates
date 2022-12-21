{
    /*
    * タブ切り替え
    * * * * * * * */

    const tabsContent = () => {
        $('[data-tabs-list] .c-tabs-list__btn').click(function () {
            const num = $('[data-tabs-list] .c-tabs-list__btn').index(this);

            $(this).addClass('is-active').siblings('.c-tabs-list__btn').removeClass('is-active');
            $(this).closest('[data-tabs-list]').next('[data-tabs-content]').find('[data-tabs-item]').removeClass('is-active');
            $('[data-tabs-item]').eq(num).addClass('is-active');
        });
    }

    tabsContent();
}