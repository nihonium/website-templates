/*
 * 動画埋め込みテストページ
 https://qiita.com/iiishokoiii/items/3037d6d01248502aee68
 */

document.addEventListener('DOMContentLoaded', function () {
    var kv = document.getElementById('kv');
    var kvLoop = document.getElementById('kv-loop');
    var kvState = document.getElementById('kv-state');
    var kvLoopState = document.getElementById('kv-loop-state');

    //ロード開始
    kv.addEventListener('loadedmetadata', function () {
        kvState.textContent = '1つ目の動画 ロードを開始しました';
    })
    //読み込み完了
    kv.addEventListener('loadeddata', function () {
        kvState.textContent = '1つ目の動画 読み込み完了しました';
    })
    //再生可能
    kv.addEventListener('canplay', function () {
        kvState.textContent = '1つ目の動画 再生可能です';
    })
    //再生中
    kv.addEventListener('playing', function () {
        kvState.textContent = '1つ目の動画 再生中です';
    })
    //再生終了
    kv.addEventListener('ended', function () {
        kv.parentNode.classList.add("is-hide");
        kvLoop.muted = true;
        kvLoop.loop = true;
        kvLoop.play();
    })
    //ロード開始
    kvLoop.addEventListener('loadedmetadata', function () {
        kvLoopState.textContent = '2つ目の動画 ロードを開始しました';
    })
    //読み込み完了
    kvLoop.addEventListener('loadeddata', function () {
        kvLoopState.textContent = '2つ目の動画 読み込み完了しました';
    })
    //再生可能
    kvLoop.addEventListener('canplay', function () {
        kvLoopState.textContent = '2つ目の動画 再生可能です';
    })
    //再生中
    kvLoop.addEventListener('playing', function () {
        kvLoopState.textContent = '2つ目の動画 再生中です';
    })
});
