// document ready
jQuery(function(){

});

//window scroll
jQuery(window).on('scroll',function(){
    if(window.scrollY > 150){
        jQuery('.header').addClass('fixed');
    }else{
        jQuery('.header').removeClass('fixed');
    }
});