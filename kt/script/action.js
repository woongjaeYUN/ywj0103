$(document).ready(function(){


    $('header .gnb').mouseenter(function(){
        $('header .lnb').stop().slideDown();
        $('header .lnb_bg').stop().slideDown();
    });
    $('header .gnb').mouseleave(function(){
        $('header .lnb').stop().slideUp();
        $('header .lnb_bg').stop().slideUp();
    });

    $('li:nth-child(1)').mouseenter(function(){
        $this().addClass('.on')
    })
    

    $(window).scroll(function(){
        scrT=$(window).scrollTop();

        
        if(scrT >= 900){
            counting();
        }

        if(scrT >= 900){
            counting2();
        }
    });



    let countBox = document.querySelector('li:nth-child(1) span.count');
    let count = 0;
    let num = 784653;
    
    function counting(){
        setInterval(function () {
            if (count >= num) {
                count = num;
                clearInterval(counting);
            }
            else {
                count += 1111;
            }
            
            countBox.innerHTML = new Intl.NumberFormat().format (count);
        }, 20);
    }

    let count2Box = document.querySelector('li:nth-child(2) span.count');
    let count2 = 0;
    let num2 = 531319;

    function counting2(){
        setInterval(function () {
            if (count2 >= num2) {
                count2 = num2;
                clearInterval(counting2);
            } else {
                count2 += 1111;
            }
            count2Box.innerHTML = new Intl.NumberFormat().format (count2);
        },20);
    }

})