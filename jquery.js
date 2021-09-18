$(function(){

//ヘッダーアコーディオンの処理

    $(".header-hiphop").on("click", function() {
        $(".header-hiphop-list").slideToggle();
    });

    $(".header-jpop").on("click", function() {
        $(".header-jpop-list").slideToggle();
    });

    $(".header-vocaloid").on("click", function() {
        $(".header-vocaloid-list").slideToggle();
    });


//レスポンシブメニューの高さ調整

//    var height=$("#header").height();
//    $(".responsive-menu").css("top", height + 24);


//ハンバーガー開閉時の処理

    $(".btn-header").on('click', function() {
        $('.responsive-menu,.btn-line').toggleClass('open');
    });


});
