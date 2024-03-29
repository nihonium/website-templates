{
    /*
    * ページ読み込み後、アンカーリンク位置に自動遷移させる
    * * * * * * * */

    const urlHash = () => {
        if (window.location.hash === '') { return; }
        document.getElementById(window.location.hash.slice(1)).scrollIntoView(true);
    }

    window.addEventListener('load', urlHash);
}