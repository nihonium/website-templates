/*
* GraphAPIでインスタグラム投稿一覧を出力
* 参考　https://ginneko-atelier.com/blogs/entry448/
*
* 出力先に下記を記述する
* <div id="insta"></div>
* * * * * * * */

{
    $(function () {
        let list = '';
        let media = '';

        const limit = 6;
        const accessToken = 'EAAIM5ob7lnABAFSTA4BKbdKeng2ifU98vV32XUzTVw5ZB9ZAuWMtGuDn4i95ZBtr5BDy5VST14YOfvCeaFARaQtRJUT51fxFOdkDTcMejkak6gnlcO3coLmq6xAgmhbzaRA5YRxGHv4gUDNVJdPd4IiPmYGNy86b4arNFfZCcfMbZC1X4rDeZB';
        const businessID = 17841450404970166;
        const url = `https://graph.facebook.com/v10.0/${businessID}?fields=name%2Cmedia.limit(${limit})%7Bcaption%2Cmedia_url%2Cthumbnail_url%2Cpermalink%2Clike_count%2Ccomments_count%2Cmedia_type%7D&access_token=${accessToken}`;

        $.ajax({
            url: url
        }).done((res)=> {
            const data = res.media;
            $.each(data, function(index, val) {
            $.each(val, function(i, item) {
                // console.log(item);
                if(item.media_url){
                //メディアのタイプがビデオの場合、サムネを取得
                media = (item.media_type == 'VIDEO' ? item.thumbnail_url : item.media_url);

                // 一覧を変数listに格納
                list +=
                `<li>
                    <a href="${item.permalink}" target="_blank" rel="noopener"><img src="${media}"></a>
                </li>`;
                }
            })
            });
            $('#insta').html(`<ul class="p-col-inst">${list}</ul>`);
        }).fail(function(jqXHR, status) {
            $('#insta').html('<p>読み込みに失敗しました。</p>');
        });
    });
}