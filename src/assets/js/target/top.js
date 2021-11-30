{
    $(function () {
        let list = '';
        let media = '';
        const limit = 6; //表示件数
        const accessToken = 'EAAGfN7VvhXQBAP7qHASWfl2vjNUIagLp9AQXmRNfAbxZAoBd5qQ8L7Ajh2OPAHCHZChjTCxqR8L6bzMviWKRMS9kHqhSMBUMUGP7gYgfDFHrkF2dl4t37T2uBlSxjnK3PDx9qcZB9EzaMGbUeBzZAlug0qpAMkWY83cmZCjb2AoT7mQVZCoOiC';
        const businessID = 17841450330482971;
        // const url = `https://graph.facebook.com/v10.0/${businessID}?fields=name%2Cmedia.limit(${limit}){caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=${accessToken}`;
        const url = 'https://graph.facebook.com/v10.0/17841450330482971?fields=name%2Cmedia.limit(6)%7Bcaption%2Cmedia_url%2Cthumbnail_url%2Cpermalink%2Clike_count%2Ccomments_count%2Cmedia_type%7D&access_token=EAAGfN7VvhXQBAP7qHASWfl2vjNUIagLp9AQXmRNfAbxZAoBd5qQ8L7Ajh2OPAHCHZChjTCxqR8L6bzMviWKRMS9kHqhSMBUMUGP7gYgfDFHrkF2dl4t37T2uBlSxjnK3PDx9qcZB9EzaMGbUeBzZAlug0qpAMkWY83cmZCjb2AoT7mQVZCoOiC';

        $.ajax({
                url: url
            }).done((res)=> {
                const data = res.media;
                $.each(data, function(index, val) {
                $.each(val, function(i, item) {
                    console.log(item);
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