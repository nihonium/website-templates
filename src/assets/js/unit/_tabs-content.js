{
    /*
    * タブ切り替え
    * * * * * * * */

    const tabsContent = () => {
        $('[data-tabs-list] li').click(function () {
            const num = $('[data-tabs-list] li').index(this);

            $(this).addClass('is-active').siblings('li').removeClass('is-active');
            $(this).closest('[data-tabs-list]').next('[data-tabs-content]').find('[data-tabs-item]').removeClass('is-active');
            $('[data-tabs-item]').eq(num).addClass('is-active');
        });
    }

    tabsContent();
}