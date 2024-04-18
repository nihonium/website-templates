/*
 * 出力するJavaScriptを指定
 */

/*
 * 記述例
    js: {
        concat: [
            {
                source: [
                    'src/assets/js/unit/_modal_inline.js',
                    'src/assets/js/unit/_url-hash.js',
                    'src/assets/js/target/common.js'
                ],
                publish: 'common.js'
            },
 */

module.exports = {
    js: {
        concat: [
            {
                source: [
                    'src/assets/js/unit/_url-hash.js',
                    'src/assets/js/unit/_smooth-scrolling.js',
                    'src/assets/js/target/common.js'
                ],
                publish: 'common.js'
            },
            {
                source: [
                    'src/assets/js/unit/_mv-slider.js'
                ],
                publish: 'top.js'
            },
            {
                source: [
                    'src/assets/js/unit/_tabs-content.js',
                    'src/assets/js/unit/_modal_video.js',
                    'src/assets/js/unit/_accordion_basic.js',
                    'src/assets/js/unit/_auto_height.js',
                    'src/assets/js/unit/_display-time-based-elements.js',
                    'src/assets/js/unit/_floating-bnr.js',
                    'src/assets/js/unit/_handle-submit.js',
                    'src/assets/js/unit/_gsap-sample.js',
                    'src/assets/js/unit/_validatorjs-sample.js'
                ],
                publish: 'layout.js'
            }
        ]
    }
};
