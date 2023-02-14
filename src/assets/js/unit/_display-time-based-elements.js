{
    /*
    * 時間ごとの要素の出し分け
    * * * * * * * */

    const displayTimeBasedElements = () => {
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
        if ((setTime > 900) || (setTime < 1801)) {
            $('#business_hours').show();
            $('#off_hours').hide();
        } else {
            $('#business_hours').hide();
            $('#off_hours').show();
        }
    }

    // 1秒毎に処理を実行
    setInterval(displayTimeBasedElements, 1000);
}