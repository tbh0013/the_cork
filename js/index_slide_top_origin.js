document.addEventListener('DOMContentLoaded', function(){
	var setImage = [
		"images/main_backimg1.jpg",
		"images/main_backimg2.jpg",
		"images/main_backimg3.jpg",
		"images/main_backimg4.jpg",
	];
    
    //カウンターの初期値設定
    var counter = 1;
  
    // ビューポート確認用
    var mql;
    //スライドショー関数用
    var bg_slide;

    // 初回ビューポートチェック 
    switchSlide();

    // ブレイクポイント時に発火するよう設定
    mql.addEventListener("change", switchSlide);
  
    // ビューポートの幅でスライドショーを切り替える処理
    function switchSlide() {
      mql = window.matchMedia('screen and (min-width: 960px)');
      
      //パソコン向け ビューポート 960px以上発火
      if(mql.matches){
        //PCビューにリセット(960px以上)
        document.getElementById("index").style.backgroundImage = "url(" + setImage[0] + ")";
        counter = 0;
        //スライドショー関数
        bg_slide = setInterval((function(){
          if(counter >= setImage.length-1){
            counter = 0;
          } else {
            counter++;
          }
          //背景画像を設定
          document.getElementById("index").style.backgroundImage = "url(" + setImage[counter] + ")";
        }), 3000);
        
      //(959px以下)
	} else {
        document.getElementById("index").style.backgroundImage = "url()";
        clearInterval(bg_slide);
      }
    };

});
