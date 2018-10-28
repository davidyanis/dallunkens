/* $(document).ready(function(){

    $(".buttonStyleLogIn").click(function(){
        $('.ui.modal').modal('show');      
    });
    
}); */

var shouldPrintWrapperOne = true
var shouldPrintWrapperTwo = true

    $(document).ready(function() {
    $('#we-make-impact-header').hide().fadeIn(2000)
});

$('.video-player').ready(function() {
    $('.video-player').delay(4000).fadeOut(1000)
}); 


    
    $(window).on('scroll', function() {

        if($(this).scrollTop() > ($('.two-box-wrapper').offset().top) - 700 && shouldPrintWrapperOne) {

            $('.main-content-section-one').hide().transition('slide right', '1000ms')
            $('.main-content-section-two').hide().transition('slide right', '1000ms')
            $('#missonAndVisonText').hide().fadeIn(1500)
            $('#innovationText').hide().fadeIn(1500)
            $('#more').hide().fadeIn(2000)
            $('#wireless').hide().fadeIn(2000)
            console.log($(window).height());
            shouldPrintWrapperOne = !shouldPrintWrapperOne
            /* this is the first wrapper */
    /* 
            $('.over-footer-wrapper').hide().transition('slide right', '3000ms')
            $('.over-footer-text-software').hide().fadeIn(1000)
            $('.over-footer-text-hardware').hide().fadeIn(1000)
            $('.over-footer-text-flexibility').hide().fadeIn(1000) */
        } 

        if ($(this).scrollTop() > ($('.two-box-wrapper-2').offset().top) - 700 && shouldPrintWrapperTwo) {
            $('.main-content-section-three').hide().transition('slide right', '1000ms')
            $('.main-content-section-four').hide().transition('slide right', '1000ms')
            $('#coreValuesText').hide().fadeIn(1500)
            $('#jobOpeningsText').hide().fadeIn(1500)
            $('#security').hide().fadeIn(2000)
            $('#workWithUs').hide().fadeIn(2000)
            /* this is the second wrapper */

            shouldPrintWrapperTwo = !shouldPrintWrapperTwo
        }
      
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