/* $(document).ready(function(){

    $(".buttonStyleLogIn").click(function(){
        $('.ui.modal').modal('show');      
    });
    
}); */

var shouldPrintWrapperOne = true
var shouldPrintWrapperTwo = true

/* $(document).ready(function(){
    $('.above-main-section').hide().delay(5000).fadeIn(2000)
});

$('.video-player').ready(function() {
    $('.video-player').delay(4000).fadeOut(1000)
});  */


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

    $('.specification-btn').toggle(function() {
        $('.specification').show();
    });

/* Arrow up scrolling to top smooth animation */
    function scrollToTop() {
        window.scroll({
         top: 0,
            behavior: "smooth",
        });
    }
     
    
