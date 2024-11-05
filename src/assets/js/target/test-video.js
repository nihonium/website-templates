/*
 * 動画埋め込みテストページ
 https://qiita.com/iiishokoiii/items/3037d6d01248502aee68
 */

document.addEventListener('DOMContentLoaded', function () {
    var v = document.getElementById('video');
    var state = document.getElementById('state');
    //ロード開始
    v.addEventListener('loadedmetadata', function () {
        state.textContent = 'ロードを開始しました';
    })
    //読み込み完了
    v.addEventListener('loadeddata', function () {
        state.textContent = '読み込み完了しました';
    })
    //再生可能
    v.addEventListener('canplay', function () {
        state.textContent = '再生可能です';
    })
    //再生中
    v.addEventListener('playing', function () {
        state.textContent = '再生中です';
    })
});