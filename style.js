$(document).ready(function(){

    $(".buttonStyleLogIn").click(function(){
        $('.ui.modal').modal('show');      
    });

    
});

$(document).ready(function(){
    $(".main-content-section-one").hide().delay(500).fadeIn(2000)
    
});

function menuButtonClicked() {
    var header = document.getElementById("header");
        header.classList.toggle("fullscreen")
    }
            
    function scrollToTop() {
        window.scroll({
         top: 0,
            behavior: "smooth",
        });
    }

    