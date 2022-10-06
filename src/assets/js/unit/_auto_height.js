{
    /**
    * * 要素内の高さ揃え
    * 参考　https://into-the-program.com/auto-height/
    * @param {string} ele 高さを揃える範囲を指定
    * @param {string} target 高さを揃える要素を指定
    *
    */
    const autoHeight = (ele, target) => {
        /**
         * eleの要素を取得
         * @type {string}
         */
        let elem = $(`${ele}`);

        /**
         * eleの高さを揃えたい要素をすべて取得
         * @type {boolean}
         */
        let elemChildren = elem.find(`${target}`);

        /**
         * 高さの最大値を代入する変数を初期化
         * @type {number}
         */
        let elemMaxHeight = 0;

        /**
         * eleの子要素の高さを格納する配列を初期化
         * @type {number[]}
         */
        let elemArray = new Array;

        //eleの子要素をループ
        Array.prototype.forEach.call(elemChildren, function (elemChild) {
            //子要素の高さのスタイルを初期化（リサイズ対応用）
            elemChild.style.height = '';
            //eleの各子要素の高さを取得
            elemArray.push(elemChild.clientHeight);

        });

        //配列に格納した高さの最大値を取得
        elemMaxHeight = Math.max.apply(null, elemArray);

        //eleの子要素をループ
        Array.prototype.forEach.call(elemChildren, function (elemChild) {
            //eleの子要素のheightにelemMaxHeightを設定
            elemChild.style.height = elemMaxHeight + 'px';
        });
    }

    const autoHeightEvent = () => {
        setTimeout(function () {
            autoHeight('[data-auto-height]', '[data-auto-height-item]');
        }, 100);
    }

    //ロードとリサイズ時に関数autoHeight**を実行
    window.addEventListener('load', autoHeightEvent);
    window.addEventListener('resize', autoHeightEvent);
}
