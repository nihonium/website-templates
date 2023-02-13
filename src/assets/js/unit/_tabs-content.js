{
    /*
    * タブ切り替え
    * * * * * * * */

    const tabsContent = () => {
        // 'data-tab-active'の入ったタブを初回アクティブ表示
        $('[data-tab-active]').addClass('is-active');

        // パラメータ取得
        function getParam(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");

            const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
            const results = regex.exec(url);

            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        // ページ読み込み時のタブ切り替え
        const tabPram = $('[data-tab-list]').children('[data-tab]').map(function () {
            return $(this).data('tab');
        });
        const pram = getParam('p');
        if (pram && $.inArray(pram, tabPram) !== -1) {
            $('[data-tab]').removeClass('is-active');
            $('[data-tab="' + pram + '"]').addClass('is-active');
        }

        // ロード後のタブ切り替え(クリックで対象タブを表示)
        $('[data-tab-list] > [data-tab]').click(function () {
            const num = $('[data-tab-list] > [data-tab]').index(this);

            $(this).addClass('is-active').siblings('[data-tab]').removeClass('is-active');
            $(this).closest('[data-tab-list]').next('[data-tab-content]').find('[data-tab-item]').removeClass('is-active');
            $('[data-tab-item]').eq(num).addClass('is-active');
        });
    }

    tabsContent();
}