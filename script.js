AOS.init();
$(document).ready(function() {
    $(document).on("scroll",scroller);
    
    $('a[href^="#"]').on('click',function(e){
        e.preventDefault();    //cancel of default functionality
        
        $(document).off("scroll");
        
        $('a').each(function(){
           $(this).removeClass('active');  
        });
        
        $(this).addClass('active');
        
        var moveto = this.hash;
        $('html, body').stop().animate({
            'scrollTop':$(this.hash).offset().top-50},500,'swing',function(){
            window.location.hash = moveto - 50;
            $(document).on("scroll", scroller)
        });
    }); 
    
    
});

function scroller(e){
    var sPos = $(document).scrollTop();
    $('#mainnav a').each(function(){
       var currentLink = $(this);
       var currentattr = $(currentLink.attr("href"));
        if($(currentattr).position().top-50 <= sPos && 
           $(currentattr).position().top-50 + $(currentattr).height() > sPos){
            window.location.hash = currentattr;
            currentLink.addClass('active');
        }
        else {
            currentLink.removeClass('active');
        }
    });
}


