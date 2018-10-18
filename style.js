$(document).ready(function(){

    $(".buttonStyleLogIn").click(function(){
        $('.ui.modal').modal('show');      
    });
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