$(function(){
    // a[href="#"]: preventDefault
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    }); 
    //header mouseenter / mouseleave
    $('header#main-header #header-wrap').on('mouseenter',function(){
        console.log('animate');
        $('#main-header #header-wrap').addClass('on');
        $('#main-header #gnb > ul > li').addClass('on');
    })
    $('header#main-header #header-wrap').on('mouseleave',function(){
        console.log('animate');
        $('#main-header #header-wrap').removeClass('on');
        $('#main-header #gnb > ul > li').removeClass('on');
    })
    //header focus event
    $('header#main-header #header-wrap ul > li > ul > li > a').on('focus',function(){
        console.log('animate');
        $('#main-header #header-wrap').addClass('on');
        $('#main-header #gnb > ul > li').addClass('on');
    });
    $('header#main-header #header-wrap ul > li > ul > li > a').on('focusout',function(){
        console.log('animate');
        $('#main-header #header-wrap').removeClass('on');
        $('#main-header #gnb > ul > li').removeClass('on');
    })
    //header #sub li .on event
    $('header#main-header #sub li').on('click',function(){
        if(!($(this).index()===2)){
            $('header#main-header #sub li').removeClass('on');
            $(this).addClass('on');
        }
    })

    //scrolltop 20 이상이면 헤더 fixed top 0;
    checkHeader();                  
    $(window).on('scroll',function(){
      checkHeader();
    })
    function checkHeader(){
        if($(document).scrollTop() >= 20) {
            $('header#main-header').addClass('fixTop');
            $('#header-wrap').addClass('fixTop');
           } 
           else{
            $('header#main-header').removeClass('fixTop');
            $('#header-wrap').removeClass('fixTop')
           }
    }
});