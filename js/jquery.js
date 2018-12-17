
$(document).ready(function() {
    /* Dropdown menu on hover */
    /* If device under 960px */
    if ($(window).width() < 960) {
        $('nav li ul').hide().removeClass('fallback');
        $('nav li').click(function () {
            $('ul', this).stop().toggle(300);
            if ($('i', this).hasClass('down')) {
                $('i', this).removeClass("down").addClass("up");
            } else {
                $('i', this).removeClass("up").addClass("down");
            } 
        });
        /* Leave hover */
        $('nav li').mouseleave(function() {
            $('ul', this).stop().slideUp(300);
            $('i', this).removeClass("up").addClass("down");
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
    

        /* shows and hides divs depending on which you click on */

    $('.capacity-btn').click(function() {
        $('.key-capacity').toggle()
            $(".capacity-btn").toggleClass("product-active-button");
            $('.specification').hide()
            $('.data-sheet').hide()
            $(".dataSheet-btn").removeClass("product-active-button");
            // Animation complete.
    });

    $('.dataSheet-btn').click(function() {
        $('.data-sheet').toggle()
        $(".dataSheet-btn").toggleClass("product-active-button");
            $('.key-capacity').hide()
            $('.key-capacity').hide()
            $(".capacity-btn").removeClass("product-active-button");
            // Animation complete.
    });


     //this is show more/show less text on product site.
    $('.show-more-text-btn').click(function() {
        $('.hidden-text-product').slideDown(1)
        $('.show-less-text-btn').show()
        $('.show-more-text-btn').hide()
    });
    
    $('.show-less-text-btn').click(function() {
        $('.hidden-text-product').slideUp(1)
        $('.show-more-text-btn').show()
        $('.show-less-text-btn').hide()

    });

     /* Arrow up scrolling to top smooth animation */
 /*     $(".scrollToTop").click(function() {
        $("html, body").animate({scrollTop: 0}, "slow");
      });
 */


      /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 1300) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/


     $(".press-description").hide();
             //animation done
             $('.ui.dropdown')
             .dropdown();
             
//       // Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function(){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
      
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('header').removeClass('nav-down').addClass('nav-up');
        
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;
// }


    

});
     


     
    
