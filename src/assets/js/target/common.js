{
    const globalMenu = () => {
        $('[data-menu-btn]').on('click', function () {
            $('[data-header-nav]').fadeIn(300);
            $('body').addClass('is-active');
        });

        $('[data-header-close]').on('click', function () {
            $('[data-header-nav]').fadeOut(300);
            $('body').removeClass('is-active');
        });
    }

    const localNavSPInit = () => {
        const $nav = $('[data-local-nav]');
        let startPos = 0;
        let winScrollTop = 0;
        $nav.hide();

        $(window).on('scroll', function () {
            let doch = $(document).innerHeight();
            let winh = $(window).innerHeight();
            let bottom = doch - winh;
            winScrollTop = $(this).scrollTop();

            if (winScrollTop <= 10) {
                $nav.fadeOut();
            } else if (bottom <= winScrollTop + 800) {
                $nav.fadeOut();
            } else {
                $nav.fadeIn();
            }
            startPos = winScrollTop;
        });
    }

    const localNavSP = () => {
        let windowWidth = '';
        const breakPoint = 768;
        const $nav = $('[data-local-nav]');

        windowWidth = window.innerWidth;

        if (windowWidth >= breakPoint) {
            $nav.hide();
        } else {
            localNavSPInit();
        }
    }

    const pageTop = () => {
        const $btn = $('#topBtn');
        let $fixed = '';
        let fixedBottom = '';
        let abBottom = '';
        let windowWidth = '';
        const breakPoint = 768;

        windowWidth = window.innerWidth;
        if (windowWidth >= breakPoint) {
            $fixed = $('[data-btn-position="pc"]');
            fixedBottom = 20;
            abBottom = 60;
        } else {
            $fixed = $('[data-btn-position="sp"]');
            fixedBottom = 100;
            abBottom = 38;
        }

        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 300) {
                $btn.fadeIn("fast");
            } else {
                $btn.fadeOut("fast");
            }
            let scrollHeight = $(document).height();
            let scrollPosition = $(window).height() + $(window).scrollTop();
            let footHeight = $fixed.innerHeight();

            if (scrollHeight - scrollPosition <= footHeight - abBottom) {
                $btn.css({
                    "position": "absolute",
                    "bottom": footHeight - abBottom + 'px'
                });
            } else {
                $btn.css({
                    "position": "fixed",
                    "bottom": fixedBottom + 'px'
                });
            }
        });

        $btn.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    }

    /** スムーズスクロール
     * 引用 https://qiita.com/yuking11/items/2beff13f30826ff147f0
     */
    const smoothScrolling = () => {
        $('[data-scroll]').on('click', function () {
            const speed = 500;
            const $self = $(this);
            const $href = $self.attr('href');
            const $margin = $self.attr('data-scroll') ? parseInt($self.attr('data-scroll')) : 0;
            const $target = $($href);
            const pos = ($target[0] && $target !== '#top') ? $target.offset().top - $margin : 0;

            $('html, body').animate({ scrollTop: pos }, speed, 'swing');
            $self.blur();

            return false;
        });
    }

    globalMenu();
    window.addEventListener('load', localNavSP);
    window.addEventListener('resize', localNavSP);
    window.addEventListener('load', pageTop);
    window.addEventListener('resize', pageTop);
    smoothScrolling();
}