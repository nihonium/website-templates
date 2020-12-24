module.exports = {
    js: {
        concat: [
            {
                source: [
                    'assets/library/js/unit/_modal_inline.js',
                    'assets/library/js/unit/_url-hash.js',
                    'assets/library/js/target/common.js'
                ],
                publish: 'common.js'
            },
            {
                source: [
                    'assets/library/js/target/top.js',
                    'assets/library/js/unit/_modal_video.js'
                ],
                publish: 'top.js'
            },
            {
                source: [
                    'assets/library/js/unit/_modal_video.js'
                ],
                publish: 'modal-video.js'
            },
            {
                source: [
                    'assets/library/js/target/plan-option.js'
                ],
                publish: 'plan-option.js'
            },
            {
                source: [
                    'assets/library/js/target/faq.js'
                ],
                publish: 'faq.js'
            }
        ]
    }
};
