$(document).ready(
    function(){
        $('.progress-bar').each(function(){
            $(this).on('inview',function(event,isInView){
                if(isInView){
                    $(this).css('width',function(){
                        return ($(this).attr('aria-valuenow')+'%');
                    });
                }
            });
        });
        if($("#container-portfolio").length){
            $('#container-portfolio').mixItUp();
        }
        $('.popup-gallery').magnificPopup(
            {
                delegate:".popup-content",
                type:'inline',
                midClick:true,
                gallery:{
                    enabled:true,
                    preload:[0,2],
                    navigateByImgClick:true,
                    arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                    tPrev:'Previous (Left arrow key)',
                    tNext:'Next (Right arrow key)',
                    tCounter:'<span class="mfp-counter">%curr% of %total%</span>'
                }
            });
        $('body').jpreLoader();
        $('.photo-icon').on('click',function(){$('.popup-photo').addClass('open-popup');return false;});
        $('.btn-close').on('click',function(){$('.popup-photo').removeClass('open-popup');return false;});
        $('body').each(function(){
            var $spy=$(this).scrollspy({
                target:'#menu'
            });
        });
        var $menu=$("#menu");
        $(window).scroll(function(){
            if($(this).scrollTop()>700 && $menu.hasClass("default-menu")){
                $menu.removeClass("default-menu").addClass("menu-fixed");
            }else if($(this).scrollTop() <= 700 && $menu.hasClass("menu-fixed")){
                $menu.removeClass("menu-fixed").addClass("default-menu");
            }
        });
        $(window).scroll(function(){
            if($(this).scrollTop() > 400){
                $('.scroll-to-top').fadeIn();
            }else{
                $('.scroll-to-top').fadeOut();
            }
        });
        $().on('click',function(){
            $('html, body').animate({ scrollTop:0 }, 800 );
            return false;
        });
    });