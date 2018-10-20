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

    

    