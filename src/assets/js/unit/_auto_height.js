{
    /*
    * 要素内の高さ揃え
    * 参考　https://into-the-program.com/auto-height/
    * * * * * * * */
    const autoHeight = (ele, target) => {

        //eleの要素を取得
        let elem = $(`${ele}`);
        //eleの高さを揃えたい要素をすべて取得
        let elemChildren = elem.find(`${target}`);
        //高さの最大値を代入する変数を初期化
        let elemMaxHeight = 0;
        //eleの子要素の高さを格納する配列を初期化
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
            autoHeight('[data-match-height]', '[data-match-height-item]');
        }, 100);
    }

    //ロードとリサイズ時に関数autoHeight**を実行
    window.addEventListener('load', autoHeightEvent);
    window.addEventListener('resize', autoHeightEvent);
}
