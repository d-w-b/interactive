
    $(function(){
        $(document).on('click', 'a[href="#"]', function(e) {
            e.preventDefault();
            }); 
        
        /*header mouseenter event*/
        $('header').on('mouseenter focus',function(){
            $(this).addClass('on');
        });
        $('header').on('mouseleave',function(){
            $(this).removeClass('on');
        });
        /* focus 이벤트 */
        $('header > ul > li > ul > li > a').on('focus',function(){
            $('header').addClass('on');
        })
        $('header > ul > li > ul > li > a').on('focusout',function(){
            $('header').removeClass('on');
        })

        /*location mouseenter 이벤트*/
        $('#sec01 .location-menu > ul > li > a').on('mouseenter focus',function(){
            console.log(' ')
            $(this).next().addClass('open');
        });
        $('#sec01 .location-menu > ul > li').on('mouseleave',function(){
            $(this).children().eq(1).removeClass('open');
        });
        $('.btn-expand > a').on('click focus',function(){
            $('#sec01 .location-menu > ul > li > ul').removeClass('open');
        })

        //Top 버튼
        $('#btn_top').on('click', function(){
            $('html, body').stop(true).animate({
                'scrollTop' : 0
            })
        })

         /* scroll */
        $(window).on('scroll', function(){
            var sTop = $(this).scrollTop();
            var footerTop = $('footer').offset().top - $(this).height() + 150;

            $('#btn_top').removeClass('white');
            console.log(sTop)
           
            if(sTop > footerTop) {
                $('#btn_top').addClass('white');
            }
        })

    });
    function location_bar() {
        let sTop = $(this).scrollTop();
        /*scrollTop 300 : header fix 해제, location 따라내려오기*/
        if(sTop >= 400){
            $('header').removeClass('fixTop');
            $('.location').addClass('fixTop');
        }
        else{
            $('header').addClass('fixTop');
            $('.location').removeClass('fixTop');
        }
      }