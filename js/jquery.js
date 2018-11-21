/* $(document).ready(function(){

    $(".buttonStyleLogIn").click(function(){
        $('.ui.modal').modal('show');      
    });
    
}); */

/* $(document).ready(function(){
    $('.above-main-section').hide().delay(5000).fadeIn(2000)
});

$('.video-player').ready(function() {
    $('.video-player').delay(4000).fadeOut(1000)
});  */

var shouldPrintWrapperOne = true
var shouldPrintWrapperTwo = true



     /* Dropdown menu on hover */
$(document).ready(function() {
    /* If device under 960px */
    if ($(window).width() < 960) {
        $('nav li ul').hide().removeClass('fallback');
        $('nav li').click(function () {
            $('ul', this).stop().toggle(300);
        });
        $('nav li').mouseleave(function() {
            $('ul', this).stop().slideUp(300);
        });
    } else {
    $('nav li ul').hide().removeClass('fallback');
    $('nav li').mouseover(function () {
        /* Change animation speed here slideDown(speed) */
        $('ul', this).stop().slideDown(300);
    });
    $('nav li').mouseleave(function() {
        $('ul', this).stop().slideUp(300);
        });
    }
    $('nav li').click(function () {
    var nav = document.getElementById("toggle-icon");
    console.log(nav)
    if (nav.contains("fa-angle-down")) {
        console.log("uppe")
      }
      else{
        console.log("nere")
      }
    });
    

        /* shows and hides divs depending on which you click on */

    $('.key-features-btn').click(function() {
        $('.key-features').toggle("fast")
            $('.specification').hide("fast")
            $('.data-sheet').hide("fast")
            // Animation complete.
    });

    $('.data-sheet-btn').click(function() {
        $('.data-sheet').toggle("fast")
            $('.specification').hide("fast")
            $('.key-features').hide("fast")
            // Animation complete.
    });

    $('.show-more-text-btn').click(function() {
        $('.hidden-text-product').slideDown()
        $('.show-less-text-btn').show()
        $('.show-more-text-btn').hide()
    });
    
    $('.show-less-text-btn').click(function() {
        $('.hidden-text-product').slideUp()
        $('.show-more-text-btn').show()
        $('.show-less-text-btn').hide()

    });

});
     


     
    
