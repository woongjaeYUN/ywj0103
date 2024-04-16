$(document).ready(function(){

    $(window).scroll(function(){
        
        scrT = $(window).scrollTop();

        if(scrT > 0){
            $('h1 > a').each(function() {
                var imgTag = $(this).find('img');
                if (imgTag.length > 0) {
                    imgTag.attr('src', 'images/YLMD22.png'); // 새 이미지 주소로 변경
                }
        $('header').addClass('on');
        $('.gnb > li > a').addClass('on');

        });
        
        }else{
            $('h1 > a').each(function() {
                var imgTag = $(this).find('img');
                if (imgTag.length > 0) {
                    imgTag.attr('src', 'images/logo_03_13.png'); // 새 이미지 주소로 변경
            $('header').removeClass('on')
            $('ul.gnb > li > a').removeClass('on');

                }
            });

        };

        

    })




});