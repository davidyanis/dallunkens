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