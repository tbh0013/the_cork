document.addEventListener('DOMContentLoaded', function(){
    var setImage = [
        "images/main_backimg1.jpg",
        "images/main_backimg2.jpg",
        "images/main_backimg3.jpg",
        "images/main_backimg4.jpg",
      ];
      
      //カウンターの初期値設定
      var counter = 1;
    
      // ビューポート519px以下を条件
      var mql;
      // スライドショー関数用
      var bg_slide;
  
      
       // // 初回ビューポートチェック
      switchSlide();
  
         // // ブレイクポイントの瞬間に発火
        mql.addEventListener("change", switchSlide);
    
      // ビューポートの幅でスライドショーを切り替える処理
      function switchSlide() {
        mql = window.matchMedia('screen and (max-width: 519px)');
  
        //スマホ向け ビューポート 519px以下発火
        if(mql.matches){
          //PCビューにリセット（519px以下）
          document.getElementById("media_back").style.backgroundImage = "url(" + setImage[0] + ")";
          counter = 0;
          // スライドショー関数
          bg_slide = setInterval((function(){
            if( counter >= setImage.length-1){
              //カウンターを初期値に戻す
              counter = 0;
          }else {
            counter++;
          }
          //背景画像を設定
          document.getElementById("media_back").style.backgroundImage = "url(" + setImage[counter] + ")";
          
          }), 3000);
        } else {
            // ビューポート 519px以上発火
            document.getElementById("media_back").style.backgroundImage = "url()";
            clearInterval(bg_slide);
          }
        };
  
  
        
  });
  

