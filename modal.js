var modal = document.getElementById("modal");
var modalText = document.getElementById("modalText");
var modalBtns = document.querySelectorAll("#modalBtn");

modalBtns.forEach(function(btn) {
  btn.onclick = function() {
    modal.style.display = "flex";
  }
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}