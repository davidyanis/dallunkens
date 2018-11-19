/* $(document).ready(function(){

    $(".buttonStyleLogIn").click(function(){
        $('.ui.modal').modal('show');      
    });
    
}); */

var shouldPrintWrapperOne = true
var shouldPrintWrapperTwo = true

$(document).ready(function(){
    $('.above-main-section').hide().delay(5000).fadeIn(2000)
});

$('.video-player').ready(function() {
    $('.video-player').delay(4000).fadeOut(1000)
}); 

    $(document).ready(function() {
        $('.main-content-section-one').hide().transition('slide right', '500ms')
        $('.main-content-section-two').hide().transition('slide right', '500ms')
        $('#missonAndVisonText').hide().fadeIn(1500)
        $('#innovationText').hide().fadeIn(1500)
        $('#more').hide().fadeIn(2000)
        $('#wireless').hide().fadeIn(2000)
    });


    
  
 
    /* Dropdown menu on hover */
    $(document).ready(function() {
        $('nav li ul').hide().removeClass('fallback');
        $('nav li').mouseover(function () {
            /* Change animation speed here slideDown(speed) */
            $('ul', this).stop().slideDown(300);
        });
        $('nav li').mouseleave(function() {
            $('ul', this).stop().slideUp(300);
          });
    });

/* Arrow up scrolling to top smooth animation */
    function scrollToTop() {
        window.scroll({
         top: 0,
            behavior: "smooth",
        });
    }
     
    
