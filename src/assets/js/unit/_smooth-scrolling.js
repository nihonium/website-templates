{
    /** スムーズスクロール
     * 引用 https://qiita.com/yuking11/items/2beff13f30826ff147f0
     */
    const smoothScrolling = () => {
        $('[data-scroll]').on('click', function() {
            const speed = 500;
            const $self = $(this);
            const $href = $self.attr('href');
            const $margin = $self.attr('data-scroll') ? parseInt($self.attr('data-scroll')) : 0;
            const $target = $($href);
            const pos = ($target[0] && $target !== '#page_top') ? $target.offset().top - $margin : 0;

            $('html, body').animate({scrollTop: pos}, speed, 'swing');
            $self.blur();

            return false;
        });
    }

    smoothScrolling();
}
