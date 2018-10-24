$(document).ready(function(){

    $(".buttonStyleLogIn").click(function(){
        $('.ui.modal').modal('show');      
    });

    
});

$(document).ready(function(){
    $('#missonAndVisonText').hide().transition('slide right', '2000ms')
    $('#innovationText').hide().transition('slide right', '2000ms')
    $('#mainContentSectionOne').hide().transition('slide right', '1500ms')
    $('#mainContentSectionTwo').hide().transition('slide left', '1500ms')

    $('#coreValuesText').hide().transition('slide left', '2000ms')
    $('#jobOpeningsText').hide().transition('slide left', '2000ms')
    $('#mainContentSectionThree').hide().transition('slide right', '1500ms')
    $('#mainContentSectionFour').hide().transition('slide left', '1500ms')

    $('#more').hide().fadeIn(1000)
    $('#wireless').hide().fadeIn(1500)
    $('#security').hide().fadeIn(2000)
    $('#workWithUs').hide().fadeIn(2000)
    
});
    $(document).ready(function() {
        $('#wide-background-picture').hide().fadeIn(1500)
        $('#we-make-impact-header').hide().fadeIn(2000)
        $(".smart-cities-button").hide().fadeIn(2000)

    });


/* $(document).ready(function(){
    $(".main-content-section-one").hide().delay(500).fadeIn(2000)
    
}); */

function menuButtonClicked() {
    var header = document.getElementById("header");
    var exitButton = document.getElementById("exit-button");
        header.classList.toggle("fullscreen")

        if (exitButton.classList.contains("fa-bars")) {
            exitButton.classList.replace("fa-bars", "fa-times");
          }
          else{
            exitButton.classList.replace("fa-times", "fa-bars");
          }
    }
            
    function scrollToTop() {
        window.scroll({
         top: 0,
            behavior: "smooth",
        });
    }


    $(document).ready(function() {
        $('nav li ul').hide().removeClass('fallback');
        $('nav li').mouseover(function () {
            $('ul', this).stop().slideDown(300);
        });
        $('nav li').mouseleave(function() {
            $('ul', this).stop().slideUp(300);
          });
});