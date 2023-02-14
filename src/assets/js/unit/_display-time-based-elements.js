{
    /*
    * 時間ごとの要素の出し分け
    * * * * * * * */

    const displayTimeBasedElements = () => {
        var checkTime = function () {
            var nowTime = new Date();

            //時・分取得する
            var nowHour = nowTime.getHours();
            var nowMinute = nowTime.getMinutes();

            // 連結し数列に変換
            var setTime = parseFloat('' + nowHour + nowMinute);

            // 偶数奇数を判定
            if (setTime % 2 === 0) {
                $('#even_number').show();
                $('#odd_number').hide();
            } else {
                $('#even_number').hide();
                $('#odd_number').show();
            }
        }

        // 1秒毎に処理を実行
        setInterval(checkTime, 1000);
    }

    displayTimeBasedElements();
}