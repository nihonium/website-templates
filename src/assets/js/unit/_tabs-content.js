{
    /*
    * タブ切り替え
    * * * * * * * */

    const tabsContent = () => {
        $('[data-tabs-active]').addClass('is-active');

        $('[data-tabs-list] .c-tabs-list__btn').click(function () {
            const num = $('[data-tabs-list] .c-tabs-list__btn').index(this);

            $(this).addClass('is-active').siblings('.c-tabs-list__btn').removeClass('is-active');
            $(this).closest('[data-tabs-list]').next('[data-tabs-content]').find('[data-tabs-item]').removeClass('is-active');
            $('[data-tabs-item]').eq(num).addClass('is-active');
        });
    }

    const tabsContentTest = () => {
        // パラメータ取得
        function getParam(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        
        // ページ読み込み時のタブ切り替え
        let tabPram = ['tab-1', 'tab-2', 'tab-3'];
        let pram = getParam('active-tab');
        if (pram && $.inArray(pram, tabPram) !== -1) {
            $('.js-tab-cts,.js-tab-switch').removeClass('is-active');
            $('[data-tab="' + pram + '"]').addClass('is-active');
        }
        
        // ロード後のタブ切り替え
        $('.js-tab-switch').on('click', function() {
            let dataPram = $(this).data('tab');
            $('.js-tab-cts,.js-tab-switch').removeClass('is-active');
            $('[data-tab="' + dataPram + '"]').addClass('is-active');
        });
    }

    tabsContent();
    tabsContentTest();
}