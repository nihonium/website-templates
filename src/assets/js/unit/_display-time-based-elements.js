{
    /**
    * * 時間ごとの要素の出し分け
    * @param {number} start 開始時刻を設定
    * @param {number} end 終了時刻を設定
    **/

    const displayTimeBasedElements = (start, end) => {
        //時・分取得する
        let nowTime = new Date();
        let nowHour = nowTime.getHours();
        let nowMinute = nowTime.getMinutes();

        // 連結し数列に変換
        let setTime = parseFloat('' + nowHour + nowMinute);

        // 偶数奇数を判定
        if (setTime % 2 === 0) {
            $('#even_number').show();
            $('#odd_number').hide();
        } else {
            $('#even_number').hide();
            $('#odd_number').show();
        }

        // 就業時間を判定
        if ((setTime > start) && (setTime < end)) {
            $('#business_hours').show();
            $('#off_hours').hide();
        } else {
            $('#business_hours').hide();
            $('#off_hours').show();
        }
    }

    // 1秒毎に処理を実行
    setInterval(displayTimeBasedElements(900, 1801), 1000);
}