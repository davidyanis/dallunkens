
 
/* Navbar mobile toggle */
function menuButtonClicked() {
  var header = document.querySelector("header");
    var exitButton = document.getElementById("exit-button");
        header.classList.toggle("fullscreen")

        if (exitButton.classList.contains("bars")) {
            exitButton.classList.replace("bars", "remove");
        } else{
            exitButton.classList.replace("remove", "bars");
        }
}

    