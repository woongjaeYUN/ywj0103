// window.onload = function(){
    
// }

$(document).ready(function(){

    $('.news_box li').mouseenter(function(){
        $('.news_box li').removeClass('on');
        $(this).addClass('on') //.siblings().removeClass('on');

        // $(this).find('h3').addClass('on')
    });


    $('.news_box li').mouseleave(function(){
        $(this).removeClass('on')
    });

    
    $('body').click(function(){
        $('kkk').hide();
        $('mmm').show();
        $('fff').hide();
    })


    // visual scroll 효과 = 패럴랙스 효과
    $('.gnb').mouseenter(function(){
        $('.lnb').stop() .slideDown();
        $('.lnb_bg').stop() .slideDown();
        
    });

    $('.gnb').mouseleave(function(){
        $('.lnb').stop() .slideUp();
        $('.lnb_bg').stop() .slideUp();
    });
    $(window).scroll(function(){
        
        scrT = $(window).scrollTop();
        if(scrT > 0){
        $('header').addClass('on');
        $('header .gnb li a').addClass('on');
        $('header .ggnb li a').addClass('on');
        $('header .hambuger span').addClass('on');
        $('header h1 span').addClass('on');
        $('.gnb ul li:before').css(['background:#000'])

        }else{
            $('header').removeClass('on')
            $('header .gnb li a').removeClass('on');
            $('header .ggnb li a').removeClass('on');
            $('header .hambuger span').removeClass('on');
            $('header h1');
            $('header h1 span').removeClass('on');
        }
        console.log(scrT)

    })



    // var visual=$('#visual').length;

    // if(visual > 0){
    //     var sc2Top = $('#section2').offset().top;
    //     var sc3Top = $('#section3').offset().top;
    
    
    //     var scrT
    //     $(window).scroll(function(){
    //         scrT = $(window).scrollTop();   //스크롤위치값
            
           


            
    //         $('#visual').css({backgroundPositionY:scrT/2})
    //         $('#visual img').css({top:200 - scrT/4});
    //         $('#visual .text_box').css({top:300 + scrT/2, opacity:1 - scrT/700})
    
            
            
    //         /* 플로팅메뉴 */
    //         $('#floating_menu').stop().animate({top:200 + scrT});
            
    
    //         let winH = $(window).height();
    
    //         var winW = $(window).width();
    //         if(scrT > sc2Top - winH / 2 && winW > 1280){
    //             $('#section2').addClass('on')
    //         } else {
    //             $('#section2').removeClass('on')
    //         };
    
    
    //         if(scrT > sc3Top - winH / 1.5){
    //             $('#section3').addClass('on')
    //         } else {
    //             $('#section3').removeClass('on')
    //         }
    
            
    //         // var km = Math.max(0,800-scrT)
    //         // console.log(km)
    //         // $('#section2 li').css({transform:'translateY('+(km)+'%)'})
    //     });
    // }

    




    


    // $('body').append('<div id="floating_menu"></div>');
    
    // var sectionLength = $('#section_box section').length;
    // for(var i=1; i<sectionLength+1; i++){        
    //     $('#floating_menu').append('<a href="#">section'+i+'</a>');
    // };


    // $('#floating_menu a').click(function(){
    //     var aHref = $(this).index();        
    //     var sectionTop = $('#section_box section').eq(aHref).offset().top;

    //     $('html').animate({scrollTop:sectionTop});
    //     alert(scrT)
    // });


    // /* 유튜브 */
    // $('.video li').find('button').click(function(){
    //     var youtubeUrl = $(this).attr('data-youtube')
    //     $('#youtube_box').css({display:'flex'});
    //     $('#youtube_box iframe').attr('src',youtubeUrl)
    // });
    // $('#youtube_box button').click(function(){
    //     $('#youtube_box').hide();
    // });


   

    // var winW = $(window).width();
    // $(window).resize(function(){
    //     winW = $(window).width();
    //     console.log(winW)

    //     if(winW <= 1280){
    //         $('#section2').removeClass('on')
    //         $('#section2 .board').css({marginTop:'35px'})
    //     } else {
    //         $('#section2').addClass('on');
    //         $('#section2 .board').css({marginTop:''})
    //     }
        
    //     if(winW <= 780){
    //         merong()
    //     } else {
    //         $('#floating_menu').show();
    //     }
    // });
    
    
    // if(winW <= 780){
    //     merong()
    // } 

    // function merong(){
    //     $('#floating_menu').hide();
    //     $('.sidemenu .gnb .lnb').height('auto')
    // }








});

