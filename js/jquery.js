
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
        $('.hidden-text-product').slideDown("fast")
        $('.show-less-text-btn').show()
        $('.show-more-text-btn').hide()
    });
    
    $('.show-less-text-btn').click(function() {
        $('.hidden-text-product').slideUp()
        $('.show-more-text-btn').show()
        $('.show-less-text-btn').hide()

    });

     /* Arrow up scrolling to top smooth animation */
     $(".scrollToTop").click(function() {
        $("html, body").animate({scrollTop: 0}, "slow");
      });

      // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
      
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        $("nav ul li a").css("color", "#000")
        $("header").css("background-color", "white")
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

/* var distance = $('header').offset().top, $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $("nav ul li a").css("color", "#fff")
        $("header").css("background-color", "rgba(0, 0, 0, 0.1)")
    }
}); */
});
     


     
    
