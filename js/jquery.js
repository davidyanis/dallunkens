
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
            $('ul', this).stop().fadeIn(300);
        });
        $('nav li').mouseleave(function() {
            $('ul', this).stop().fadeOut(50);
        });
    }
    

        /* shows and hides divs depending on which you click on */

 /*    $('.capacity-btn').click(function() {
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

    }); */

      /* On scroll down > 600px, display arrow */
    $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 600) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

/* Clickable arrow to top */
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    
     $(".press-description").hide();
             //animation done
             $('.ui.dropdown')
             .dropdown();
             
//       // Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();


//product site 

$('.shape')
  .shape('set next side', '.second.side')
  .shape('flip up');



  //clock animations starts here
  $('#smart-device-counter').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now).toLocaleString('dot'));
        }
    });
});


  $({ countNum: $('#percentage-not-connected').html() }).animate({ countNum: 50 }, {
    duration: 3000,
    easing: 'linear',
    step: function () {
    $('#percentage-not-connected').html(Math.floor(this.countNum) + "%");
    },
    complete: function () {
    $('#percentage-not-connected').html(this.countNum + "%");
    //alert('finished');
    }
});

///ends here


// wifi-penetration-percentage counter here
$({ countNum: $('#wifi-penetration-percentage').html() }).animate({ countNum: 700 }, {
    duration: 20000,
    easing: 'linear',
    step: function () {
    $('#wifi-penetration-percentage').html(Math.floor(this.countNum) + "%");
    },
    complete: function () {
    $('#wifi-penetration-percentage').html(this.countNum + "%");
    //alert('finished');
    }
});

//ends here


});

     
    
