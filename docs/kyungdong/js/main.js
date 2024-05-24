function addSlideEvent(selector){
    // variables
    var slideNum = $(selector).find('ul.slide-list').children().length;
    var slideNow = 0;
    var slideBefore = 0;
    var slidePrev = 0;
    var slideNext = 0;
    var timer = null;
    var isOnAnimation = false;
    var isTimerOn = true;
    //update vars
    function numReset(){
        if(slideNow === 0){
            slidePrev = slideNum - 1;
            slideNext = 1
        }else if(slideNow === slideNum -1){
            slidePrev = slideNum-2;
            slideNext = 0;
        }else{
            slideNext = slideNow + 1;
            slidePrev = slideNow - 1;
        }
    }
    function prev(){
        if(isOnAnimation===true) return false;
        (slideNow === 0)? slideNow = slideNum-1 : slideNow--;
        numReset();
    }
    function next(){
        if(isOnAnimation===true) return false;
        (slideNow === slideNum-1) ? slideNow = 0 : slideNow++;
        numReset()
    }
    /*function go(n){                                       
        if(isOnAnimation===true) return false;
        slideNow = n;
        numReset();
    }*/
    //render
    function showSlide(){
        if(isOnAnimation===true) return false;
        clearTimeout(timer);
        isOnAnimation = true;
        $(selector).find('ul.slide-list').children().eq(slideBefore).attr({'class' : 'fade-out'}).one('animationend',function(){
            isOnAnimation = false;
            $(this).css({'display' : 'none'});
        });
        $(selector).find('ul.slide-list').children().eq(slideNow).css({'display' : 'block'}).attr({'class' : 'fade-in'}).one('animationend',function(){
            isOnAnimation = false;
        });
        if(isTimerOn===true){
        timer = setTimeout(function(){ slideBefore = slideNow; next(); showSlide(); }, 3000);
        }              
    }
    timer = setTimeout(function() {
        next();
        showSlide();
    }, 3000);
    // input event
    $('a.btn-move.right').on('click', function(){
        slideBefore = slideNow;
        next();
        showSlide();
    });
    $('a.btn-move.left').on('click', function(){
        slideBefore = slideNow;
        prev();
        showSlide();
    })
}

