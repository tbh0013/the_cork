$(function(){
    if(window.matchMedia("(max-width: 519px)").matches){
    // 画像の枚数
    var count = $(".cork_sp li").length;
    
    // 現在表示されている画像（最初は一番目の画像）
    var current = 1;
    
    // 次に表示する画像
    var next = 2;

    // フェードイン/アウトのインターバル（何秒ごとに画像を切り替えるか。3000ミリ秒に設定）
    var interval = 3000;

    // フェードイン/アウトのスピード（500ミリ秒に設定）
    var duration = 500;

    // タイマー用の変数
    var timer;

    // 一番目の写真以外は非表示
    $(".cork_sp li:not(:first-child)").hide();

    // 3000ミリ秒（変数intervalの値）ごとにslideTimer()関数を実行
    timer = setInterval(slideTimer, interval);

    // slideTimer()関数
    function slideTimer(){
        // 関数の中身
        // 現在の画像をフェードアウト
        $(".cork_sp li:nth-child(+" + current + ")").fadeOut(duration);

        // 次の画像をフェードイン
        $(".cork_sp li:nth-child(+" + next + ")").fadeIn(duration);

        // 変数currentの新しい値:変数nextの元の値
        current = next;

        next = ++next;

        // 変数nextの値が3(画像の総数)を超える場合、１に戻す
        if(next > count){
            next = 1;
        }
    }

}
})