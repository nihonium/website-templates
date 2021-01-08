(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
{
    console.log('common.js');
}
},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
{
    const urlHash = () => {
        if (window.location.hash === "") { return; }
        document.getElementById(window.location.hash.slice(1)).scrollIntoView(true);
    }

    window.addEventListener('load', urlHash);
}
},{}]},{},[3,2,1]);
