var pageNow = 0 , pageNext = 0, pagePrev = 0, pageNum = 5;
var flag = true;
var eventScroll = ('onmousewheel' in window) ? 'mousewheel' : 'DOMMouseScroll';
var delta = 0;

// 슬라이드 객체

var slideObj = function(selector){
    this.$selector = $(selector);
    this.slideNow = -1,
    this.slideNext = 0,
    this.slidePrev = 0;
    this.slideNum = this.$selector.find('ul.slide').children().length;

    this.setIndex = function(){
        if(this.slideNow === 0){
            this.slideNext=1;
            this.slidePrev= this.slideNum -1;
        }else if(this.slideNow===this.slideNum-1){
            this.slideNext = 0;
            this.slidePrev = this.slideNow -1;
        }else{
            this.slideNext = this.slideNow + 1;
            this.slidePrev = this.slideNow - 1;
        }
    }
    this.next = function(){
        if(this.slideNow === (this.slideNum - 3)){this.slideNow = 0}   
        else{this.slideNow++;}
        this.setIndex();
    }
    this.prev = function(){
        if(this.slideNow === 0){this.slideNow = (this.slideNum-3)}      
        else{this.slideNow--;}
        this.setIndex();
    }
    this.go = function(index){
        if(index <= this.slideNum-1){
            this.slideNow = index;
            this.setIndex();
        }
    }
    this.arraySlide = function(){
        for(var i=0; i<this.slideNum; i++){
            this.$selector.find('ul.slide li').eq(i).css({'left' : i * 350 + 'px'})
        }
        this.go(0);
        this.showSlide();
    }
    this.showSlide = function(){
        this.$selector.find('ul.slide').css({'transition' : 'left 0.3s' , 'left' : -(350 * this.slideNow) + 'px'});
    }
}

function spyscroll(){
    var vhMax =$(window).height();
    var now = Math.floor( ($(document).scrollTop() + vhMax/2) / vhMax); 
    $('.main-nav').removeClass('bg_black');
    $('.main-nav > ul > li ').removeClass('white');
    $('.main-nav > ul > li ').removeClass('black');
    $('.main-nav > ul > li ').removeClass('colored');
    $('.main-nav > ul > li ').eq(now).addClass('colored');
    if(now === 0){
        $('.main-nav > ul > li').addClass('white');
    }else if(now === 1){
        $('.main-nav > ul > li').addClass('white');
    }else if(now === 2){
        $('.main-nav').addClass('bg_black');
        $('.main-nav > ul > li').addClass('black');
    }else {
        $('.main-nav > ul > li').addClass('white');
    }
}

function fullPage(){
    //초기화 
    reset();
    showPage();

    function reset(){
        if(pageNow === 0){
            pagePrev = 0;
            pageNext = (pageNow + 1);
        }else if(pageNow === (pageNum - 1)){
            pageNext = pageNow;
            pagePrev = pageNow - 1;
        }else{
            pagePrev = (pageNow - 1);
            pageNext = (pageNow + 1);
        }
    }
    function showPage(){
        $('html, body').stop(true).animate({
            scrollTop : $(window).height() * pageNow
        }, 800 , function(){
            flag = true;
        })
    }

    //스크롤 이벤트
    
    window.addEventListener(eventScroll, function(e) {
         e.preventDefault();
         if (eventScroll === 'mousewheel') {
             delta = e.wheelDelta / -120;
         } else {
             delta = e.detail / 3;
         }
         
         if (delta > 0) {
             if( pageNow !==(pageNum-1) && flag === true){
                 flag = false;
                 pageNow = pageNext;
                 reset();
                 showPage();
             }
             
         } else if (delta < 0) {
             if(pageNow !== 0 && flag === true){
                 flag = false;
                 pageNow = pagePrev;
                 reset();
                 showPage();
             }
         }
    }, {passive: false});   

    //이벤트
    $('.main-nav > ul > li > a').on('click',function(){
        var index = $(this).parent().index();
        pageNow = index;
        reset();
        showPage();
    })
}


//dom.onready
$(function(){

    /*header mouse hover 효과*/
     $('header').on('mouseenter',function(){
            $(this).addClass('on');
        });
        $('header').on('mouseleave',function(){
            $(this).removeClass('on');
        });
    /* scroll */
    $(window).on('scroll', function(){

        var sTop = $(window).scrollTop(),
            height = $(window).height();
           
            $('#btn_top').removeClass('white');
            $('header').removeClass('borderColored');
        if(sTop < height){
             $('header .gnb > li >  a').removeClass('black');
             $('header .header-side').removeClass('black');
            console.log('first page');
        }
        else if(sTop < height * 2){
            $('header .gnb > li >  a').removeClass('black');
            $('header .header-side').removeClass('black');
            $('header').addClass('borderColored');
            console.log('second page')
        }
        else if(sTop < height * 3){
             $('header .gnb > li >  a').addClass('black');
             $('header .header-side').addClass('black');
             $('header').addClass('borderColored');
            console.log('third page')
        }
        else {
             $('header .gnb > li >  a').removeClass('black');
             $('header .header-side').removeClass('black');
             $('#btn_top').addClass('white');
            console.log('footer')
        }
    })
        
        $('#sec01 .btn-box a').on('click',function(){
            $('.slide-sec01 ul.slide li').css({'display' : 'none'});
            $('.slide-sec01 ul.slide li').eq($(this).index()).css({'display' : 'block'});
            $('#sec01 .btn-box a').removeClass('on');
            $(this).addClass('on');
        })

        //Top 버튼
        $('#btn_top').on('click', function(){
            $('html, body').stop(true).animate({
                'scrollTop' : 0
            })
            pageNow = 0;
            pagePrev = 0;
            pageNext = (pageNow + 1);
        })

        fullPage();
});




