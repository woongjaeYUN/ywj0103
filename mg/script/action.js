// window.onload = function(){
    
// }

$(document).ready(function(){


    let gnbHtml = $('.gnb').html();
    $('.gnb_mo').html(gnbHtml)

    $('.hambuger').click(function(){
        $('.gnb_mo').slideToggle().css({display:'flex'});
        $('.hambuger').toggleClass('on')
    })

    let winW = $(window).width();
    mobileMenu()
    $(window).resize(function(){
        mobileMenu();
    })
    function mobileMenu(){
        winW = $(window).width()
        if(winW <= 860){
            $('.gnb_mo').addClass('mobile')
        } else {
            $('.gnb_mo').removeClass('mobile')
        }
    }
    $('.mobile > ul > li > a').click(function(){
        $('.lnb').slideUp();
        $(this).siblings('.lnb').stop().slideToggle();
        return false
    })

    $('header .gnb').mouseenter(function(){
        $('header .gnb .lnb').stop().slideDown();
        $('header .lnb_bg').stop().slideDown();
        console.log('kd')
    });

    $('header .gnb').mouseleave(function(){
        $('header .gnb .lnb').stop().slideUp();
        $('header .lnb_bg').stop().slideUp();
    });

    $('.section3 h2').mouseleave(function(){
        
        $('.lnb_bg').stop().slideUp();
    });


    $('.section3 h2').click(function(){
        let h2Index = $(this).index();  //0,1
        $(this).addClass('on').siblings().removeClass('on');
        $('.sec3_box > div').eq(h2Index).show().siblings().hide();
    })





    //let winH = $(window).height();
    /* let scrT =$(window).scrollTop(); */

    $(window).scroll(function(){
        
        scrT = $(window).scrollTop();
        

        if(scrT > 0){
        $('header').addClass('on');
        $('header .gnb li a').addClass('on');
        $('header .ggnb li a').addClass('on');
        $('header .hambuger span').addClass('on');
        $('header h1 span').addClass('on');
        $('.gnb ul li:before').css(['background:#000']);

        }else{
            $('header').removeClass('on')
            $('header .gnb li a').removeClass('on');
            $('header .ggnb li a').removeClass('on');
            $('header .hambuger span').removeClass('on');
            $('header h1');
            $('header h1 span').removeClass('on');
        };

/*         if(scrT >= 200){
            $('.sub_text_box > h3').addClass('on');
            $('.sub_text_box > b').addClass('on');
            $('.sub_text_box > em').addClass('on');
            $('.image_box .sazang').addClass('on');
            $('.image_box .square').addClass('on');
            $('.image_box .name').addClass('on');
        }

        else{
            $('.sub_text_box > h3').removeClass('on');
            $('.sub_text_box > b').removeClass('on');
            $('.sub_text_box > em').removeClass('on');
            $('.image_box .sazang').removeClass('on');
            $('.image_box .square').removeClass('on');
            $('.image_box .name').removeClass('on');
        }; */

    })

    
    $(window).scroll(function(){
        scrT=$(window).scrollTop();

        if(scrT >= 200){
            $('.sub_text_box > h3').addClass('on');
            $('.sub_text_box > b').addClass('on');
            $('.sub_text_box > em').addClass('on');
            $('.image_box .sazang').addClass('on');
            $('.image_box .square').addClass('on');
            $('.image_box .name').addClass('on');
        }

        else{
            $('.sub_text_box > h3').removeClass('on');
            $('.sub_text_box > b').removeClass('on');
            $('.sub_text_box > em').removeClass('on');
            $('.image_box .sazang').removeClass('on');
            $('.image_box .square').removeClass('on');
            $('.image_box .name').removeClass('on');
        };
    });
});

