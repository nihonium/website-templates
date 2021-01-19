
/**
 * 汎用アコーディオン
 * 使い方
 * アコーディオンのヘッド部分にdata-accordion-headを記述する。
 * コンテンツ部分のタグはヘッド部分と隣接させておく。
    <div class="news-accordion__head" data-accordion-head>
        ヘッド
    </div>
    <div class="news-accordion__content">
        コンテンツ
    </div>
*/

const accordionBasic = () => {
    $('[data-accordion-head]').each(function (v) {
        $(this).on('click', function () {
            $(this).toggleClass('is-open').next().slideToggle();
        });
    });
};

accordionBasic();