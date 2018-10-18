
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

$('.ui.modal')
  .modal('show')
  ;