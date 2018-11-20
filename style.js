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

        /* shows and hides divs depending on which you click on */
        $('.specification-btn').click(function() {
            $('.specification').toggle()
                $('.key-features').hide()
                $('.data-sheet').hide()
                // Animation complete.
        });

        $('.key-features-btn').click(function() {
            $('.key-features').toggle()
                $('.specification').hide()
                $('.data-sheet').hide()
                // Animation complete.
        });

    $('.data-sheet-btn').click(function() {
        $('.data-sheet').toggle()
            $('.specification').hide()
            $('.key-features').hide()
            // Animation complete.
    });

    $('.show-more-text-btn').click(function() {
        $('.hidden-text-product').toggle()
    });
});

/* Arrow up scrolling to top smooth animation */
    function scrollToTop() {
        window.scroll({
         top: 0,
            behavior: "smooth",
        });
    }
     
    
