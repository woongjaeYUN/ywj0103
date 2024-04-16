$(document).ready(function(){

    $(function(){
        var page =$('.fullpage').fullpage({
        // 1. 네비게이션 보이기
        navigation : true,
 
        // 2. 네비게이션 위치 지정
        navigationPosition : 'right',
 
        // 3. 각 섹션의 배경색상 지정 (6자의 핵사코드 작성가능)
        sectionsColor : ['pink', 'yellow', '#efefef' ,'blue'],

        menu : '.gnb',
        anchors : ['section1', 'section2', 'section3','section4','section5','section6','section7',],
        normalScrollElements: '.scroll',
        scrollOverflow : true
        })
    })

    $('.about_box').click(function(){
        $('.main').toggleClass('on');
        $('.about_box').toggleClass('on');
        $('.jomyeng').toggleClass('on')
        $('.led').toggleClass('on');
        $('ul.zum > li').toggleClass('on');
        $('.visual > h2').toggleClass('on');
        $('.visual > p').toggleClass('on');
        $('.logo').toggleClass('on');
        $('.e_mail').toggleClass('on');
        $('.main > .scroll b').toggleClass('on');
        $('.main > .scroll > span').toggleClass('on');
        $('.about_box > h3').toggleClass('on');
        $('.text_box > ul > li:nth-child(1)').toggleClass('on');
        $('.text_box > ul > li:nth-child(2)').toggleClass('on');
        $('.text_box > ul > li:nth-child(3)').toggleClass('on');
        $('.text_box > ul > li:nth-child(4)').toggleClass('on');
    });

    

    $(window).scroll(function () {
        var sec1Top = $('.section:nth-child(1)').offset().top;
        var sec2Top = $('.section:nth-child(2)').offset().top;
        var sec3Top = $('.section:nth-child(3)').offset().top;
        var sec4Top = $('.section:nth-child(4)').offset().top;
        var fooTop = $('footer').offset().top;        

        /* sec1 */
        if ($(window).scrollTop() >= sec1Top ) {
                $('.section:nth-child(1) > .site_box figure img').addClass('on');
        } else {
                $('.section:nth-child(1) > .site_box figure img').removeClass('on');
        }
        /* sec2 */
        if ($(window).scrollTop() >= sec2Top) {
                $('.section:nth-child(2) > .site_box figure img').addClass('on');
        } else {
                $('.section:nth-child(2) > .site_box figure img').removeClass('on');
        }
        /* sec3 */
        if ($(window).scrollTop() >= sec3Top) {
                $('.section:nth-child(3) > .site_box figure img').addClass('on');
        } else {
                $('.section:nth-child(3) > .site_box figure img').removeClass('on');
        }
        /* sec4 */
        if ($(window).scrollTop() >= sec4Top) {
                $('.section:nth-child(4) > .site_box figure img').addClass('on');
        } else {
                $('.section:nth-child(4) > .site_box figure img').removeClass('on');
        }
        /* footer */
        if ($(window).scrollTop() >= fooTop) {
                $('footer > .l_container .y').addClass('on');
                $('footer > .l_container .name_box').addClass('on');
                $('footer > .l_container .album').addClass('on');
                $('footer > .l_container .album > figure').addClass('on');

                $('footer > .r_container .hobbie_box').addClass('on');
                $('footer > .r_container .skill_box').addClass('on');
                $('footer > .r_container .name_about > h3').addClass('on');
                $('footer > .r_container .name_about > h4').addClass('on');
                $('footer > .r_container .publish').addClass('on');
                $('footer > .r_container .on1').addClass('on');
                $('footer > .r_container .on2').addClass('on');
                $('footer > .r_container .on3').addClass('on');
                $('footer > .r_container .on4').addClass('on');
                $('footer > .r_container .on5').addClass('on');
                $('footer > .r_container .on6').addClass('on');
        } else {
                $('footer > .l_container .y').removeClass('on');
                $('footer > .l_container .name_box').removeClass('on');
                $('footer > .l_container .album').removeClass('on');
                $('footer > .l_container .album > figure').removeClass('on');

                $('footer > .r_container .hobbie_box').removeClass('on');
                $('footer > .r_container .skill_box').removeClass('on');
                $('footer > .r_container .name_about > h3').removeClass('on');
                $('footer > .r_container .name_about > h4').removeClass('on');
                $('footer > .r_container .publish').removeClass('on');
                $('footer > .r_container .on1').removeClass('on');
                $('footer > .r_container .on2').removeClass('on');
                $('footer > .r_container .on3').removeClass('on');
                $('footer > .r_container .on4').removeClass('on');
                $('footer > .r_container .on5').removeClass('on');
                $('footer > .r_container .on6').removeClass('on');
                
        }
    });

/*     $('.about_box').mouseout(function(){
        $('.about_box').removeClass('on');
        $('.led').hide();
        $('.jomyeng').removeClass('on');
        $('.main').removeClass('on');
    }); */
})