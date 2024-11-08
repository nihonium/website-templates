/*
 * 動画埋め込みテストページ
 https://qiita.com/iiishokoiii/items/3037d6d01248502aee68
 */

document.addEventListener('DOMContentLoaded', function () {
    var kv = document.getElementById('kv');
    var kvLoop = document.getElementById('kv-loop');

    // 最初の動画が再生終了したら2つ目の動画を再生
    kv.addEventListener('ended', function () {
        kv.parentNode.classList.add("is-hide");
        kvLoop.play();
    })
});
